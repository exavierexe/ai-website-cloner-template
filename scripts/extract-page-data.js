// Run this script via Chrome MCP on resend.com
// It will extract all necessary data for cloning

(function extractPageData() {
  const data = {
    url: window.location.href,
    title: document.title,
    
    // Font extraction
    fonts: {
      unique: [...new Set(
        [...document.querySelectorAll('*')]
          .slice(0, 300)
          .map(el => getComputedStyle(el).fontFamily)
          .filter(f => f && f !== 'inherit')
      )],
      links: [...document.querySelectorAll('link[rel*="stylesheet"], link[href*="font"]')]
        .map(l => ({ href: l.href, rel: l.rel }))
    },
    
    // Color extraction
    colors: {
      backgrounds: [...new Set(
        [...document.querySelectorAll('*')]
          .slice(0, 300)
          .map(el => getComputedStyle(el).backgroundColor)
          .filter(c => c && c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent')
      )],
      textColors: [...new Set(
        [...document.querySelectorAll('*')]
          .slice(0, 300)
          .map(el => getComputedStyle(el).color)
          .filter(c => c && c !== 'inherit')
      )]
    },
    
    // Asset discovery
    assets: {
      images: [...document.querySelectorAll('img')].map(img => ({
        src: img.src || img.currentSrc,
        alt: img.alt,
        width: img.naturalWidth,
        height: img.naturalHeight,
        parentClasses: img.parentElement?.className,
        siblings: img.parentElement ? [...img.parentElement.querySelectorAll('img')].length : 0,
        position: getComputedStyle(img).position,
        zIndex: getComputedStyle(img).zIndex
      })),
      
      videos: [...document.querySelectorAll('video')].map(v => ({
        src: v.src || v.querySelector('source')?.src,
        poster: v.poster,
        autoplay: v.autoplay,
        loop: v.loop,
        muted: v.muted
      })),
      
      backgroundImages: [...document.querySelectorAll('*')]
        .filter(el => {
          const bg = getComputedStyle(el).backgroundImage;
          return bg && bg !== 'none' && bg.includes('url(');
        })
        .map(el => ({
          url: getComputedStyle(el).backgroundImage,
          element: el.tagName + (el.className ? '.' + el.className.split(' ')[0] : '')
        })),
      
      svgs: {
        count: document.querySelectorAll('svg').length,
        inline: [...document.querySelectorAll('svg')]
          .slice(0, 50)
          .map((svg, i) => ({
            index: i,
            viewBox: svg.getAttribute('viewBox'),
            classes: svg.className.baseVal || svg.getAttribute('class'),
            outerHTML: svg.outerHTML.slice(0, 500)
          }))
      }
    },
    
    // Meta and SEO
    meta: {
      favicons: [...document.querySelectorAll('link[rel*="icon"]')]
        .map(l => ({ href: l.href, sizes: l.sizes?.toString(), rel: l.rel })),
      ogImages: [...document.querySelectorAll('meta[property^="og:"]')]
        .map(m => ({ property: m.getAttribute('property'), content: m.content })),
      description: document.querySelector('meta[name="description"]')?.content
    },
    
    // Page structure
    structure: {
      bodyClasses: document.body.className,
      htmlClasses: document.documentElement.className,
      hasLenis: !!document.querySelector('.lenis'),
      hasLocomotiveScroll: !!document.querySelector('.locomotive-scroll'),
      scrollContainer: document.querySelector('[data-scroll-container]') ? 'custom' : 'default',
      
      sections: [...document.querySelectorAll('section, [class*="section"], main > div')]
        .slice(0, 20)
        .map((section, i) => ({
          index: i,
          tag: section.tagName,
          classes: section.className?.toString().split(' ').slice(0, 3).join(' '),
          id: section.id,
          height: section.offsetHeight,
          hasBackground: getComputedStyle(section).backgroundImage !== 'none',
          position: getComputedStyle(section).position,
          zIndex: getComputedStyle(section).zIndex
        }))
    }
  };
  
  return JSON.stringify(data, null, 2);
})();
