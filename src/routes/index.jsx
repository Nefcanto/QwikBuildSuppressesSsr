import {
	component$,
	Resource,
} from '@builder.io/qwik'
import { useEndpoint } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'
import Hero from '../components/Index/Hero'
import Presentation from '../components/Index/Presentation'
import Cta from '../components/Index/Cta'
import Services from '../components/Index/Services'
import Portfolio from '../components/Index/Portfolio'
import Technology from '../components/Index/Technology'
import OurServices from '../components/Index/OurServices'

export const onGet = async ({ params }) => {

	const layoutData = await getFromCacheOrApi('/layout/data?key=main')
	const pageData = await getFromCacheOrApi('/page/data?key=home')
	const menu = await getFromCacheOrApi('/menuitem/list')	
	const sections = layoutData.sections.concat(pageData.sections)
	return {
		sections,
		menu,
	}
}

const Index = component$(() => {

	const pageData = useEndpoint()

	return <Resource
		value={pageData}
		onPending={() => <div>Loading...</div>}
		onRejected={() => <div>Error</div>}
		onResolved={(data) => {
			var hero = data.sections.find(i => i?.key === 'hero')
			var presentation = data.sections.find(i => i?.key === 'presentation')
			var ourServices = data.sections.find(i => i?.key === 'ourServices')
			var cta = data.sections.find(i => i?.key === 'cta')
			var services = data.sections.find(i => i?.key === 'services')
			var technology = data.sections.find(i => i?.key === 'technology')
			var portfolio = data.sections.find(i => i.key === 'portfolio')
			return <>
				<Hero {...hero} />
				<Services {...services} />
				<Technology {...technology} />
				<Presentation {...presentation} />
				<OurServices {...ourServices}/>
				<Cta {...cta} />
				<Portfolio {...portfolio}/>
			</>
		}}
	/>
})

export default Index
