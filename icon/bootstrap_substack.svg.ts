import { class_ } from 'ctx-core/html'
import { path_, svg_ } from 'relementjs/svg'
export function bootstrap_substack_(props?:{
	class?:string
}) {
	return (
		svg_({
			xmlns: 'http://www.w3.org/2000/svg',
			viewBox: '0 0 16 16',
			class: class_(props?.class)
		}, [
			path_({
				d: 'M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z'
			})
		])
	)
}
