function addCSS(css) {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
}

// 示例CSS
const css = `
html {
    background: url('https://api.dujin.org/bing/1920.php') center center no-repeat no-repeat fixed #6A6B6F;
    background-size: cover;
}

body {
    margin: 0px auto;
	padding: 20px 30px 10px 30px;
	background-color: white;
    min-width: auto;
    border-radius: 0px;
    min-height: 100vh;
}

#taglabel .Label {
  width: 108px;
}

.SideNav-item:hover {
    transform: scale(1.02);
}
    
.SideNav {
    min-width: auto;
}
    
#postBody {
    padding-bottom: 16px;
}

#header h1 {
	display: flex;
	align-items: center;
	justify-content: center;
}

.title-left {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

#avatarImg {
    width: 40px;
    height: 40px;
}

#functionBtn {
    gap: 6px;
    margin: 20px 0 10px 0;
}

#functionBtn div:first-of-type {
    gap: 10px;
}

.title-right .circle {
	padding: 12px 12px;
}

.title-left a {
        font-size: 28px;
        font-weight: normal;		
}

.postTitle {
        font-size: 28px;
}

#taglabel {
    text-align: center;
}
    
#footer {
	margin-top: 10px;
}
	
.animate_heartBeatScale {
    display: none;
}

.markdown-body img {
    border-radius: 10px;	
}

@keyframes waveMove {
	from {background-position: 0 100%;}
	to {background-position: -20px 100%;}
}

.markdown-body a:hover {
    background-size: 20px auto;
}

a:hover {
  text-decoration: none;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cpath fill='none' stroke='%23333' d='M0 3.5c5 0 5-3 10-3s5 3 10 3 5-3 10-3 5 3 10 3'/%3E%3C/svg%3E") repeat-x 0 100%;
  background-size: 20px auto;
  animation: waveMove 1s infinite linear;
}

/* 网站导航开始 */
   .core-next-dh-shortcode {
    display: inline-block;
    vertical-align: top;
    width: 32.382%;
    border: 1px solid rgba(0, 0, 0, .125);
    margin: 0px 4px 10px 4px;
    border-radius: 0.375rem;
}
.core-next-dh-shortcode-url {
    text-decoration: none !important;
    display: flex;
    gap: 10px;
    align-items: stretch;
    border: 1px solid #f0f0f0;
    padding: 10px;
    border-radius: 0.375rem;
    position: relative;
    top: 0;
    transition: top .3s;
	color: black;
}
.core-next-dh-shortcode-url .dh-icon {
    width: 40px;
    flex-shrink: 0;
    color: #fff;
	align-items: center !important;
    justify-content: center !important;
    display: flex !important;
}
.post-warp .content-warp a {
    text-decoration: underline;
    color: var(--theme-color);
}
.core-next-dh-shortcode-url .dh-body {
    flex: 1;
    width: 0;
}
.core-next-dh-shortcode-url .dh-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
	font-size: 16px;
    font-weight: bold;
    text-align: left;
}
.core-next-dh-shortcode-url .dh-des {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
}
.core-next-dh-shortcode-url img {
    width: 40px;
    height: 40px;
    vertical-align: top;
}
/* 网站导航结束 */
@media (max-width: 768px) {
body {
	padding: 45px 20px 10px 20px;
}
.core-next-dh-shortcode {
    margin: 0px 8px 10px 0px;
}
   .core-next-dh-shortcode {
    width: 100%;
}
	#functionBtn.Btn-flex{
		min-width: auto;
	}

	#header h1 a {
		font-size: 28px;
	}

	.blogTitle {
		display: inline-block;
	}		

	#live2d {
    display: none;
    }
}

	@media screen and (min-width: 1028px) and (max-width:99999px) {
	#divdown2 {
	margin-top: -20px;text-align: center;margin-bottom: 0px;font-size: clamp(1rem, 0.489rem + 1.41vw, 100rem);line-height: 1.8em;display: -webkit-box;-webkit-box-orient: horizontal;-webkit-box-pack: center;-webkit-box-align: center;display: -moz-box;-moz-box-orient: horizontal;-moz-box-pack: center;-moz-box-align: center;display: -o-box;-o-box-orient: horizontal;-o-box-pack: center;-o-box-align: center;display: -ms-box;-ms-box-orient: horizontal;-ms-box-pack: center;-ms-box-align: center;
	}
	}
	@media screen and (min-width: 900px) and (max-width:1028px) {
	#divdown2 {
	margin-top: -20px;text-align: center;margin-bottom: 0px;font-size: clamp(1rem, 0.489rem + 1.41vw, 100rem);line-height: 1.8em;display: -webkit-box;-webkit-box-orient: horizontal;-webkit-box-pack: center;-webkit-box-align: center;display: -moz-box;-moz-box-orient: horizontal;-moz-box-pack: center;-moz-box-align: center;display: -o-box;-o-box-orient: horizontal;-o-box-pack: center;-o-box-align: center;display: -ms-box;-ms-box-orient: horizontal;-ms-box-pack: center;-ms-box-align: center;
	}
	}
	@media screen and (max-width:900px){
	#divdown2 {
	margin-top: -20px;text-align: center;margin-bottom: 0px;font-size: clamp(1rem, 0.489rem + 4vw, 100rem);line-height: 1.8em;display: -webkit-box;-webkit-box-orient: horizontal;-webkit-box-pack: center;-webkit-box-align: center;display: -moz-box;-moz-box-orient: horizontal;-moz-box-pack: center;-moz-box-align: center;display: -o-box;-o-box-orient: horizontal;-o-box-pack: center;-o-box-align: center;display: -ms-box;-ms-box-orient: horizontal;-ms-box-pack: center;-ms-box-align: center;
	}
}
`;

addCSS(css);
