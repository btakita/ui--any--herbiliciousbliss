import { class_ } from 'ctx-core/html'
import { path_, svg_ } from 'relementjs/svg'
export function heroicons_bars_3_(props?:{
	class?:string
}) {
	return (
		svg_({
			xmlns: 'http://www.w3.org/2000/svg',
			fill: 'none',
			viewBox: '0 0 24 24',
			'stroke-width': '1.5',
			stroke: 'currentColor',
			class: class_(props?.class)
		}, [
			path_({
				'stroke-linecap': 'round',
				'stroke-linejoin': 'round',
				d: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
			})
		])
	)
}
