import PayForm from './app/components/common/form/payform/PayForm'
import { ChieldsBlock } from './app/components/pages/about-chields/ChieldsBlock'
import Faces from './app/components/pages/aboutUs/Faces'
import Confidencial from './app/components/pages/confidently/Confidencial'
import FirstMon from './app/components/pages/first-monument/firstMon'
import Main from './app/components/pages/main/Main'
import SketchesMobile from './app/components/pages/main/sketches/SketchesMobile'
import NewsBlock from './app/components/pages/news/NewsBlock'
import Newspapers from './app/components/pages/newspapers/Newspapers'
import PoemsBlock from './app/components/pages/poems/PoemsBlock'
import Program from './app/components/pages/program/Program'
import Regions from './app/components/pages/regions/Regions'
import Trustees from './app/components/pages/trustees/Trustees'
import VideoBlock from './app/components/pages/videos/VideoBlock'

const routes = [
	//main
	{
		path: '',
		element: <Main />,
	},
	{
		path: 'news',
		element: <NewsBlock />,
	},
	{
		path: 'poems',
		element: <PoemsBlock />,
	},
	{
		path: 'video',
		element: <VideoBlock />,
	},
	{
		path: 'payform',
		element: <PayForm />,
	},
	{
		path: 'newspapers',
		element: <Newspapers />,
	},
	{
		path: 'program',
		element: <Program />,
	},
	{
		path: 'regions',
		element: <Regions />,
	},
	{
		path: 'trustees',
		element: <Trustees />,
	},
	{
		path: 'faces',
		element: <Faces />,
	},

	{
		path: 'sketches',
		element: <SketchesMobile />,
	},
	{
		path: 'club',
		element: <FirstMon />,
	},
	{
		path: 'confidency',
		element: <Confidencial />,
	},

	{
		path: 'chields-block',
		element: <ChieldsBlock />,
	},
]

export default routes
