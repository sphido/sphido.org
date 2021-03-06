const isActive = (page, current) => page.slug === current ? 'active' : '';

export const getPageHtml = (page) => `<!DOCTYPE html>
<html lang="cs" dir="ltr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	
	<link rel="shortcut icon" href="/favicon.ico"/>
	<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>
	<meta name="google-site-verification" content="jr_C4Rk1HNubH1Szgotyz6diVKR6ZNZTetbMyWiTGOI"/>

	<!-- Google Fonts -->
	<link href="//fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet"/>

	<!-- Boostrap 5 -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>

	<!-- highlight.js -->	
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/monokai-sublime.min.css" integrity="sha512-/l4iViNMhxR5MhSlak3Yw/L/7qUBifVy7MpLjeJTc8BPMRFbGplGN0xqufCDwhSdxSnVgy+e/OYsNnU75K3yyQ==" crossorigin="anonymous" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/highlight.min.js" integrity="sha512-9GIHU4rPKUMvNOHFOer5Zm2zHnZOjayOO3lZpokhhCtgt8FNlNiW/bb7kl0R5ZXfCDVPcQ8S4oBdNs92p5Nm2w==" crossorigin="anonymous"></script>	
	<script>hljs.initHighlightingOnLoad();</script>

	<link rel="stylesheet" href="/css/style.css"/>

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="//www.googletagmanager.com/gtag/js?id=UA-59247808-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'UA-59247808-1');
	</script>

	<title>${page.title}</title>
</head>
<body class="${page.base}">

	<header>
		<div class="d-flex justify-content-center">
			<figure class="figure text-center w-75">
				<a href="/" title="Homepage"><img src="/img/sphido.svg" class="figure-img text-center img-fluid rounded" title="Sphido logo" alt="Sphido logo"></a>		
			</figure>
		</div>
	</header>

	<aside>
	  <button type="button" class="btn btn-outline-secondary bg-white text-reset btn-lg btn-block mb-4 d-lg-none" data-toggle="collapse" data-target="#aside-menu" aria-expanded="false" aria-controls="aside-menu" aria-label="Toggle menu">
	    <img src="https://twemoji.maxcdn.com/v/13.0.1/72x72/1f354.png" alt="🍔" width="20" height="20">
	    <span>Show menu</span>
		</button>
		
		<div class="collapse d-lg-block" id="aside-menu">
			
			<div class="list-group mb-3">
				<a class="list-group-item list-group-item-action ${isActive(page, '.')}" href="/">Let's starts</a>
				<a class="list-group-item list-group-item-action ${isActive(page, 'sphido-core')}" href="/packages/sphido-core">Core package</a>
			</div>
			
						
			<h4>Extenders</h4>
			
			<div class="list-group my-3">
				<a class="list-group-item list-group-item-action ${isActive(page, 'sphido-frontmatter')}" href="/packages/sphido-frontmatter">Front matter</a>
				<a class="list-group-item list-group-item-action ${isActive(page, 'sphido-markdown')}" href="/packages/sphido-markdown">Markdown content</a>
				<a class="list-group-item list-group-item-action ${isActive(page, 'sphido-meta')}" href="/packages/sphido-meta">Page meta</a>
			</div>
			
			<h4>Templating</h4>
			
			<div class="list-group my-3">
				<a class="list-group-item list-group-item-action ${isActive(page, 'sphido-nunjucks')}" href="/packages/sphido-nunjucks">Nunjucks templates</a>
			</div>
			
			<h4>Outputing</h4>
			
			<div class="list-group my-3">
				<a class="list-group-item list-group-item-action ${isActive(page, 'sphido-sitemap')}" href="/packages/sphido-sitemap">XML Sitemap</a>
				<a class="list-group-item list-group-item-action ${isActive(page, 'sphido-feed')}" href="/packages/sphido-feed">Atom feed</a>
				<a class="list-group-item list-group-item-action ${isActive(page, 'sphido-link')}" href="/packages/sphido-link">Add <code>link()</code> function</a>
				<a class="list-group-item list-group-item-action ${isActive(page, 'sphido-pagination')}" href="/packages/sphido-pagination">Pagination</a>
				<a class="list-group-item list-group-item-action ${isActive(page, 'sphido-emoji')}" href="/packages/sphido-emoji">Emoji</a>
			</div>
	
			<h4>Examples</h4>
			<div class="list-group my-3">
				<a class="list-group-item list-group-item-action" href="https://github.com/sphido/examples/tree/master/basic" target="_blank">Basics</a>
				<a class="list-group-item list-group-item-action" href="https://github.com/sphido/examples/tree/master/custom-extenders" target="_blank">Custom extenders</a>
				<a class="list-group-item list-group-item-action" href="https://github.com/sphido/examples/tree/master/custom-extenders" target="_blank">Markdown to JSON</a>
			</div>
			
							
			<div class="github text-center mt-5">
				<a href="https://github.com/sphido/sphido" target="_blank">					
					<svg width="128px" height="128px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;">
				    <path d="M9,19C4,20.5 4,16.5 2,16M16,22L16,18.13C16.076,17.166 15.733,16.214 15.06,15.52C18.2,15.17 21.5,13.98 21.5,8.52C21.5,7.124 20.962,5.781 20,4.77C20.456,3.549 20.423,2.198 19.91,1C19.397,-0.198 18.73,0.65 16,2.48C13.708,1.859 11.292,1.859 9,2.48C6.27,0.65 5.09,1 5.09,1C4.577,2.198 4.544,3.549 5,4.77C4.03,5.788 3.493,7.144 3.5,8.55C3.5,13.97 6.8,15.16 9.94,15.55C9.275,16.237 8.933,17.176 9,18.13L9,22" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:1px;"/>
					</svg>
				</a>
			</div>
		</div>
	</aside>
	
	<main>${page.content}</main>
	
	<footer class="mt-5 pt-5 text-center">
		<p>
			Made with
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="14px" viewBox="0 0 86 70" xml:space="preserve">
				<path fill="#D2322D" d="M78.947,5.753c-8.359-7.671-21.91-7.671-30.271,0L43,10.963l-5.678-5.21c-8.357-7.671-21.91-7.671-30.27,0c-9.404,8.631-9.404,22.624,0,31.255L43,70l35.947-32.991C88.352,28.377,88.352,14.385,78.947,5.753z"></path>
			</svg>
			<a href="https://github.com/sphido/sphido.org" class="text-reset">Sphido</a> by <a href="https://ozana.cz" target="_blank" class="text-reset">Roman Ožana</a>
		</p>
	</footer>
</body>
</html>`;