//////////////// 文章目录代码块 part1 start ////////////////

	//////////////// 插入css的函数 start ////////////////
function loadResource(type, attributes) {
	if (type === 'style') {
		const style = document.createElement('style');
		style.textContent = attributes.css;
		document.head.appendChild(style);

		// 添加调试信息
		const debugInfo = document.createElement('div');
		debugInfo.textContent = `加载CSS样式√`;
		document.body.appendChild(debugInfo);
	}
}
	//////////////// 插入css的函数 end ////////////////

let tocTitle // 全局声明变量

	//////////////// 页面顶部和底部跳转函数 start ////////////////
function ToTop() {
	window.scrollTo({ top: 0 });
	tocTitle.scrollTop = 0;  // 将 .toc-title 滚动到顶部

	// 添加调试信息
	const debugInfo = document.createElement('div');
	debugInfo.textContent = '页面滚动到顶部';
	document.body.appendChild(debugInfo);
}
function ToBottom() {
	window.scrollTo({ top: document.body.scrollHeight});

	// 添加调试信息
	const debugInfo = document.createElement('div');
	debugInfo.textContent = '页面滚动到底部';
	document.body.appendChild(debugInfo);
}
	//////////////// 页面顶部和底部跳转函数 end ////////////////

	//////////////// 创建toc目录html结构 start ////////////////
function createTOC() {
	const tocElement = document.createElement('div');
	tocElement.className = 'toc';

	// 创建 toc-btn 按钮容器并添加到 toc 元素中
	const tocBtn = document.createElement('div');
	tocBtn.className = 'toc-btn';
	tocElement.appendChild(tocBtn);

	// 创建 toc-title 容器并添加到 toc 元素中
	tocTitle = document.createElement('div');
	tocTitle.className = 'toc-title';
	tocElement.appendChild(tocTitle);

	// 将目录 <div> 插入到 <body> 中
	document.body.appendChild(tocElement);

	// 向 toc-btn 中添加内容
	tocBtn.innerHTML = `<div onclick="ToTop();"><a title="跳转顶部"><svg class="octicon"width="16"height="16"><path id="ToTopBtn"fill-rule="evenodd"d="M3 2.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 2.25Zm5.53 2.97 3.75 3.75a.749.749 0 1 1-1.06 1.06L8.75 7.561v6.689a.75.75 0 0 1-1.5 0V7.561L4.78 10.03a.749.749 0 1 1-1.06-1.06l3.75-3.75a.749.749 0 0 1 1.06 0Z"></path></svg></a></div><div onclick="ToBottom();"><a title="跳转底部"><svg class="octicon"width="16"height="16"><path id="ToBottom"fill-rule="evenodd"d="M7.47 10.78a.749.749 0 0 0 1.06 0l3.75-3.75a.749.749 0 1 0-1.06-1.06L8.75 8.439V1.75a.75.75 0 0 0-1.5 0v6.689L4.78 5.97a.749.749 0 1 0-1.06 1.06l3.75 3.75ZM3.75 13a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"></path></svg></a></div>`;

	// 获取文章标题并设置排版
	const headings = document.querySelectorAll('.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6');
	headings.forEach(heading => {
		if (!heading.id) {
			heading.id = heading.textContent.trim().replace(/\s+/g, '-').toLowerCase();
		}

		const link = document.createElement('a');
		link.href = `#${heading.id}`;
		link.textContent = heading.textContent;
		link.className = `toc-link toc-${heading.tagName.toLowerCase()}`;
		if (heading.tagName !== 'H1') {
			const level = parseInt(heading.tagName.charAt(1));
			link.style.marginLeft = `${(level - 1) * 10}px`;
		}
		link.addEventListener('click', function(e) {
			// 添加点击事件, 平滑滚动到对应的标题位置
			e.preventDefault();
			document.getElementById(heading.id).scrollIntoView();
		});
		// 将链接添加到 toc-title 容器中
		tocTitle.appendChild(link);
	});

	// 添加调试信息
	const debugInfo = document.createElement('div');
	debugInfo.textContent = 'TOC目录结构已创建';
	document.body.appendChild(debugInfo);
}
	//////////////// 创建toc目录html结构 end ////////////////

function toggleTOC() {
	const tocElement = document.querySelector('.toc');
	const tocIcon = document.querySelector('.ArticleTOC');
	if (tocElement && tocIcon) {
		tocElement.classList.toggle('show');
		tocIcon.classList.toggle('active');
		tocIcon.style.boxShadow = tocIcon.classList.contains('active') ?
			'6px 6px 14px 0 var(--header-btn-shadowColor) inset, -7px -7px 12px 0 var(--header-btn-shadowColor2) inset' :
			'';

		// 添加调试信息
		const debugInfo = document.createElement('div');
		debugInfo.textContent = `目录显示状态切换: ${tocIcon.classList.contains('active') ? '显示' : '隐藏'}`;
		document.body.appendChild(debugInfo);
	}
}
//////////////// 文章目录代码块 part1 end ////////////////

document.addEventListener('DOMContentLoaded', () => {
	document.body.insertAdjacentHTML('beforeend', 'js代码开始执行<br>');
	//////////////// 懒加载图片 start ////////////////
	const ob = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const img = entry.target;
				const imgContainer = img.previousElementSibling;
				const handleError = (isError = false) => {
					if (imgContainer && imgContainer.classList.contains('ImgLazyLoad-circle')) {
						imgContainer.style.display = 'none';
					}
					if (isError) {
						const errorContainer = document.createElement('div');
						errorContainer.classList.add('Imgerror-container');
						errorContainer.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" style="height:60px;" class="Imgerror" viewBox="0 0 1024 1024"><path fill="#ff5b5b" d="M320 896h-77.833L515.92 622.253a21.333 21.333 0 0 0 3.16-26.133l-89.427-149.053 165.427-330.86A21.333 21.333 0 0 0 576 85.333H96a53.393 53.393 0 0 0-53.333 53.334v746.666A53.393 53.393 0 0 0 96 938.667h224A21.333 21.333 0 0 0 320 896zM96 128h445.48L386.253 438.46a21.333 21.333 0 0 0 .787 20.513L474 603.86l-69.333 69.333-89.62-89.653a53.333 53.333 0 0 0-75.427 0L85.333 737.827v-599.16A10.667 10.667 0 0 1 96 128zM85.333 885.333v-87.166l184.46-184.454a10.667 10.667 0 0 1 15.08 0l89.627 89.62L181.833 896H96a10.667 10.667 0 0 1-10.667-10.667zm192-458.666C336.147 426.667 384 378.813 384 320s-47.853-106.667-106.667-106.667S170.667 261.187 170.667 320s47.853 106.667 106.666 106.667zm0-170.667a64 64 0 1 1-64 64 64.073 64.073 0 0 1 64-64zM928 128H661.333a21.333 21.333 0 0 0-19.08 11.793l-.046.087c-.04.087-.087.173-.127.253L535.587 353.127a21.333 21.333 0 1 0 38.16 19.08l100.773-201.54H928a10.667 10.667 0 0 1 10.667 10.666V652.5L783.713 497.54a53.333 53.333 0 0 0-75.426 0L571.08 634.747a21.333 21.333 0 0 0-3.153 26.153l24.666 41.08-203.646 244.36a21.333 21.333 0 0 0 16.386 34.993H928A53.393 53.393 0 0 0 981.333 928V181.333A53.393 53.393 0 0 0 928 128zm0 810.667H450.88L635.053 717.66a21.333 21.333 0 0 0 1.907-24.667l-23.933-39.886L738.46 527.68a10.667 10.667 0 0 1 15.08 0l185.127 185.153V928A10.667 10.667 0 0 1 928 938.667z"/></svg><p class="Imgerror-message">图片错误</p>`;
						img.parentNode.insertBefore(errorContainer, img.nextSibling);
						img.style.display = 'none';
					} else {
						img.classList.remove('ImgLazyLoad-circle');
						img.classList.add('ImgLoaded');
					}
				};

				img.src = img.getAttribute('img-src');
				ob.unobserve(img);

				img.onload = () => handleError(false);
				img.onerror = () => handleError(true);

				// 添加调试信息
				const debugInfo = document.createElement('div');
				debugInfo.textContent = `懒加载图片: ${img.src}`;
				document.body.appendChild(debugInfo);
			}
		});
	}, {
		rootMargin: '0px 0px 500px 0px',
	});

	document.querySelectorAll('[img-src]').forEach(img => ob.observe(img));
	//////////////// 懒加载图片 end ////////////////

	//////////////// 文章目录代码块 part2 start ////////////////
	createTOC();
	//绑定按钮点击切换显示目录
	const tocIcon = document.querySelector('.ArticleTOC');
	if (tocIcon) {
		tocIcon.onclick = (e) => {
			e.stopPropagation();
			toggleTOC();
		};

		// 添加调试信息
		const debugInfo = document.createElement('div');
		debugInfo.textContent = '绑定目录按钮点击事件';
		document.body.appendChild(debugInfo);
	}
		//////////////// 添加 CSS 样式 start ////////////////
	const css = `:root{--toc-link-bgColor:#ffffffb8;--toc-h1-after-bgColor:#1b9dff}[data-color-mode=light][data-light-theme=dark],[data-color-mode=light][data-light-theme=dark]::selection,[data-color-mode=dark][data-dark-theme=dark],[data-color-mode=dark][data-dark-theme=dark]::selection{--toc-link-bgColor:#121d23ab;--toc-h1-after-bgColor:#43dbff}.toc{position:fixed;bottom:13%;right:0;transform:translateX(50%);display:flex;flex-direction:column;width:250px;max-height:50vh;background-color:var(--toc-link-bgColor);border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,0.2);overflow:hidden;z-index:99;opacity:0;visibility:hidden;transition:opacity 0.3s ease,transform 0.3s ease,visibility 0.3s;backdrop-filter:blur(15px);scrollbar-width:thin;scrollbar-color:#9fc6e3 transparent;}.toc::-webkit-scrollbar{width:4px;}.toc::-webkit-scrollbar-thumb{background:#9fc6e3;border-radius:20px;}.toc::-webkit-scrollbar-thumb:hover{background:#6baedf;}.toc.show{opacity:1;visibility:visible;transform:translateY(0);}.toc .toc-title a{display:block;color:var(--fgColor-default);text-decoration:none;padding:6px;font-size:14px;line-height:1.5;border-radius:8px;transition:background-color 0.2s ease;}.toc .toc-title a:hover{background-color:#6be5ff99;transform:translate(1px,1px);}.toc-h1{position:relative;padding-left:10px;}.toc-h1::after{content:'';position:absolute;top:50%;left:0;width:3px;height:60%;background-color:var(--toc-h1-after-bgColor);transform:translateY(-50%);}.toc-btn{display:inherit;position:sticky;top:0;z-index:999999;}.toc-btn div{display:flex;justify-content:center;width:100%;box-shadow:2px 4px 16px #7982a01f;cursor:pointer;}.toc-btn div:active{box-shadow:inset -2px -2px 6px var(--header-btn-shadowColor),inset 2px 2px 6px var(--header-btn-shadowColor2);}.toc-btn a{color:var(--title-right-svgColor);padding:9px 11px;}.toc-btn div:hover a{color:var(--title-right-svgHovercolor);}.toc-title{padding:10px 10px 0;max-height:calc(50vh - 59px);overflow-y:auto;overflow-y:scroll;}.toc-title::-webkit-scrollbar{display:none;}.toc-title{scrollbar-width:none;}@media (max-width:768px){}@media (max-width:768px){.toc{width:200px;max-height:40vh;}.toc-title{padding:5px 8px 0;}.back-to-top{bottom:2%;width:40px;height:40px;font-size:20px;}}.toc-link.toc-active{background-color:#3db9d399;font-weight:bold;box-shadow:inset -2px -2px 6px #ffffff42,inset 2px 2px 6px #59595980;}`;

	loadResource('style', { css });
		//////////////// 添加 CSS 样式 end ////////////////

	// 滚动切换高亮标题
	const highlightTOC = () => {
		const tocLinks = document.querySelectorAll('.toc-link');
		const fromTop = window.scrollY + 10;
		let currentHeading = null;
		// 遍历目录链接，查找当前显示的标题
		tocLinks.forEach(link => {
			const section = document.getElementById(link.getAttribute('href').substring(1));
			if (section && section.offsetTop <= fromTop) {
				currentHeading = link;
			}
		});
		// 清除所有高亮
		tocLinks.forEach(link => link.classList.remove('toc-active'));
		if (currentHeading) {
			currentHeading.classList.add('toc-active');
			currentHeading.scrollIntoView({ block: 'center', inline: 'nearest' });
		}

		// 添加调试信息
		const debugInfo = document.createElement('div');
		document.body.appendChild(debugInfo);
	};

	// 添加全局滚动监听
	document.addEventListener('scroll', highlightTOC);
	//////////////// 文章目录代码块 part2 end ////////////////
});
