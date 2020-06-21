// custom typefaces
// import "typeface-montserrat"
// import "typeface-merriweather"

// import "prismjs/themes/prism.css"
import 'normalize.css';
import './src/style/common.scss';
import './src/script/init.ts';
import Main from './src/script/main.ts';

export const onRouteUpdate = () => {
    new Main()
}
