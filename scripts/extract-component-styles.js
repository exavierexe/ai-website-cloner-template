// Component-level style extraction
// Usage: Replace SELECTOR with the actual CSS selector for the component
// Example: extractComponentStyles('header'), extractComponentStyles('.hero-section')

function extractComponentStyles(selector) {
  const el = document.querySelector(selector);
  if (!el) return JSON.stringify({ error: 'Element not found: ' + selector });
  
  const props = [
    'fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color',
    'textTransform','textDecoration','backgroundColor','background',
    'padding','paddingTop','paddingRight','paddingBottom','paddingLeft',
    'margin','marginTop','marginRight','marginBottom','marginLeft',
    'width','height','maxWidth','minWidth','maxHeight','minHeight',
    'display','flexDirection','justifyContent','alignItems','gap',
    'gridTemplateColumns','gridTemplateRows','gridGap',
    'borderRadius','border','borderTop','borderBottom','borderLeft','borderRight',
    'boxShadow','overflow','overflowX','overflowY',
    'position','top','right','bottom','left','zIndex',
    'opacity','transform','transition','cursor',
    'objectFit','objectPosition','mixBlendMode','filter','backdropFilter',
    'whiteSpace','textOverflow','WebkitLineClamp',
    'animationName','animationDuration','animationTimingFunction','animationDelay'
  ];
  
  function extractStyles(element) {
    const cs = getComputedStyle(element);
    const styles = {};
    props.forEach(p => {
      const v = cs[p];
      if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'rgba(0, 0, 0, 0)') {
        styles[p] = v;
      }
    });
    return styles;
  }
  
  function walk(element, depth) {
    if (depth > 4) return null;
    const children = [...element.children];
    
    return {
      tag: element.tagName.toLowerCase(),
      classes: element.className?.toString().split(' ').slice(0, 5).join(' '),
      id: element.id,
      text: element.childNodes.length === 1 && element.childNodes[0].nodeType === 3 
        ? element.textContent.trim().slice(0, 200) 
        : null,
      styles: extractStyles(element),
      images: element.tagName === 'IMG' ? {
        src: element.src,
        alt: element.alt,
        naturalWidth: element.naturalWidth,
        naturalHeight: element.naturalHeight
      } : null,
      videos: element.tagName === 'VIDEO' ? {
        src: element.src || element.querySelector('source')?.src,
        poster: element.poster
      } : null,
      childCount: children.length,
      children: children.slice(0, 20).map(c => walk(c, depth + 1)).filter(Boolean)
    };
  }
  
  return JSON.stringify(walk(el, 0), null, 2);
}

// Auto-run on common selectors if no argument provided
if (typeof window !== 'undefined') {
  console.log('Component extraction script loaded. Usage:');
  console.log('extractComponentStyles("header")');
  console.log('extractComponentStyles(".hero")');
  console.log('extractComponentStyles("main > section:nth-child(1)")');
}
