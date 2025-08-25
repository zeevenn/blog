---
title: Suspense
date: 2025-08-20
tags: ["react", "components"]
---

大多数应用程序都需要从服务器获取一些数据。例如一个 `fetch` 请求：

```tsx
const response = await fetch('https://api.example.com/data')
const data = await response.json()
```

虽然代码很简单，但无论你的服务器有多快，你都需要考虑用户在等待时看到的内容。你无法控制用户的网络连接。同样，你还需要考虑如果请求失败会发生什么。你也无法控制用户的连接可靠性。

React 提供了一套优雅的解决方案来处理这些场景：`Suspense` 和 `ErrorBoundary` 组件。

关键问题在于：如何在渲染 UI 时恰当地处理异步状态？这时候 `use` 钩子就派上用场了：

```tsx
function PhoneDetails() {
	const details = use(phoneDetailsPromise)
	// now you have the details
}
```

重要的是要理解 `use` 钩子是如何传递一个 promise 的。它不是创建 promise 的地方。你需要在其他地方触发 `fetch` 请求，然后将它传递给 `use` 钩子。否则，每次组件渲染时，你都会再次触发 `fetch` 请求。

真正的诀窍是 `use` 钩子如何将 promise 转换为已解决的值，而无需使用 `await`！我们需要确保如果 `use` 钩子不能返回已解决的 `details`，代码不会继续。

为了完成声明式循环，当 promise 被抛出时，React 会「暂停」组件，这意味着它会向上查找父组件的树，寻找 `Suspense` 组件并渲染其边界：

```tsx
import { Suspense } from 'react'

function App() {
	return (
		<Suspense fallback={<div>loading phone details</div>}>
			<PhoneDetails />
		</Suspense>
	)
}
```

这类似于错误边界，因为 `Suspense` 边界可以处理其子组件或孙组件中抛出的任何 promise。它们也可以嵌套，因此你可以在应用程序的加载状态上拥有很大的控制权。

如果 promise 被拒绝，那么你的 `ErrorBoundary` 将被触发，你可以渲染一个错误消息给用户：

```tsx
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

function App() {
	return (
		<ErrorBoundary fallback={<div>Oh no, something bad happened</div>}>
			<Suspense fallback={<div>loading phone details</div>}>
				<PhoneDetails />
			</Suspense>
		</ErrorBoundary>
	)
}
```

一个简单的 `use` 钩子实现如下：

```js
type UsePromise<Value> = Promise<Value> & {
	status: 'pending' | 'fulfilled' | 'rejected'
	value: Value
	reason: unknown
}

function use<Value>(promise: Promise<Value>): Value {
	const usePromise = promise as UsePromise<Value>
	if (usePromise.status === 'fulfilled') {
		return usePromise.value
	} else if (usePromise.status === 'rejected') {
		throw usePromise.reason
	} else if (usePromise.status === 'pending') {
		throw usePromise
	} else {
		usePromise.status = 'pending'
		usePromise.then(
			(result) => {
				usePromise.status = 'fulfilled'
				usePromise.value = result
			},
			(reason) => {
				usePromise.status = 'rejected'
				usePromise.reason = reason
			},
		)
		throw usePromise
	}
}
```
