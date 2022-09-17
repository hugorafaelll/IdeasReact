import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Roboto:wght@400;500&display=swap');

        * {
            margin:0;
            padding:0;
            outline:0;
            box-sizing: border-box;
            background-color:red;
        }
        html, body, #root{
            height:100%;
        }
    
    body{
        font:14px   'Robot'
        background:#ecf1f8;
    }

`;