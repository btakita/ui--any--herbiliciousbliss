import { class_ } from 'ctx-core/html'
import { relement_env_T, type tag_dom_T } from 'relementjs'
import { div_ } from 'relementjs/html'
export function container__div_<env_T extends relement_env_T>({
	class: _class
}:{
	class?:string
}, ...children:tag_dom_T[]) {
	return (
		div_<env_T>({
			class: class_(
				'max-w-7xl',
				'mx-auto',
				'px-6',
				'md:px-12',
				'xl:px-6',
				_class)
		}, ...children)
	)
}
