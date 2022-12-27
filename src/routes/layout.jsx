import {
    component$,
    Resource,
    Slot,
} from '@builder.io/qwik'
import { useEndpoint } from '@builder.io/qwik-city'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'

const Layout = component$(() => {

    const layoutData = useEndpoint()
    const  menu = useEndpoint()

    var data = {
        ...layoutData,
        ...menu
    }
    return <Resource
        value={data}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(data) => {
            const headerLogo = data.sections.find(i => i.key === 'headerLogo');
            const headerContact = data.sections.find(i => i.key === 'headerContact');
            const quickAccess = data.sections.find(i => i.key === 'quickAccess');
            const team = data.sections.find(i => i.key === 'team');
            const relatedLinks = data.sections.find(i => i.key === 'relatedLinks');
            const miniAbout = data.sections.find(i => i.key === 'miniAbout');
            return <>
                <Header
                    headerLogo={headerLogo}
                    headerContact={headerContact}
                    menu={data?.menu?.data}
                />
                <Slot />
                <Footer
                    quickAccess={quickAccess}
                    team={team}
                    relatedLinks={relatedLinks}
                    miniAbout={miniAbout}
                />
            </>
        }}
    />
})

export default Layout
