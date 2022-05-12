import { useState } from 'react'

export function useBurgerBtn() {
	const [active, setActive] = useState(false)

	const handleToggle = () => {
		setActive(!active)
	}
	return { handleToggle, active }
}
