import AbcIcon from '@mui/icons-material/Abc';
import Images from './Image/List'
import PageContent from './Page/Content'
import Pages from './Page/List'
import SectionActions from './Section/Actions'
import SectionContent from './Section/Content';
import SectionItems from './Section/Items'
import Sections from './Section/List'
import Texts from './Text/List'

const ContentRoutes = [
    {
        path: "/pages",
        component: Pages
    },
    {
        path: "/page/editContent",
        component: PageContent
    },
    {
        path: "/sections",
        component: Sections
    },
    {
        path: "/section/editContent",
        component: SectionContent
    },
    {
        path: "/section/items",
        component: SectionItems
    },
    {
        path: "/section/actions",
        component: SectionActions
    },
    {
        path: "/content/images",
        component: Images
    },
    {
        path: "/content/texts",
        component: Texts
    }
]

const ContentMenu = [
    {
        title: "Contents",
        "icon": AbcIcon,
        children: [
            {
                title: "Pages",
                url: "/pages"
            },
            {
                title: "Sections",
                url: "/sections"
            },
            {
                title: "Texts",
                url: "/content/texts"
            },
            {
                title: "Images",
                url: "/content/images"
            }
        ]
    }
]

export { ContentMenu }
export { ContentRoutes }