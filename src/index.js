
const MutationObserver = window.MutationObserver 
                      || window.WebKitMutationObserver 
                      || window.MozMutationObserver;

class WaterMark {
  defaultOpts = {
    id: 'water-mark',
    height: 100,
    width: 150,
    font: '10px sans-serif',
    rotate: -30,
    fillStyle: '#ccc',
    opacity: 1.0,
    text: ''
  }

  constructor(options) {
    this._cfg = {...this.defaultOpts, ...options}

    this.createObserver()
    this.createCanvas()
    this.load()
    
  }


  set(key, value) {
    this._cfg[key] = value
  }

  get(key) {
    return this._cfg[key]
  }

  createObserver() {
    this.createDomObserver()
    this.createBodyObserver()
  }

  // 水印的载体div
  createDomObserver() {
    this.observer = new MutationObserver(() => {
      this.remove()
    });
  }


  createBodyObserver() {
    this.bodyObserver = new MutationObserver((mutationList) => {
      if (
          mutationList[0].removedNodes.length && 
          mutationList[0].removedNodes[0].id === this.get('id')
        ) {
        this.load()
      }
    });
  }


  createCanvas() {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const height = this.get('height')
    const width = this.get('width')
    canvas.height = height
    canvas.width = width

    const font = this.get('font')
    const text = this.get('text')
    const rotate = this.get('rotate')
    const fillStyle = this.get('fillStyle')
    const opacity = this.get('opacity')
    
    ctx.fillStyle = fillStyle
    ctx.font = font;
    ctx.globalAlpha = opacity;
    ctx.rotate(rotate / Math.PI * 2)
    ctx.translate(0, height / 2)
    ctx.fillText(text, 0, height / 2 )
    
    this.set('canvas', canvas)
    this.set('ctx', ctx)
  }

  observe() {
    this.domObserve()
    this.bodyObserve()
  }

  domObserve() {
    const dom = this.get('dom');
    this.observer.observe(dom, {
      childList: true,
      attributes: true,
      characterData: true,
    })
  }

  bodyObserve() {
    const body = document.querySelector('body')
    this.bodyObserver.observe(body, {
      childList: true
    })
  }


  remove() {
    const body = document.querySelector('body')
    const dom = this.get('dom')
    body.removeChild(dom)
    this.set('dom', null)
  }
   

  load() {
    const canvas = this.get('canvas')
    const img = canvas.toDataURL('image/png', 1.0)
    const body = document.querySelector('body')
    const dom = document.createElement('div')
    dom.setAttribute('id', this.get('id'))
    dom.setAttribute('style', 
      `
      background-image:url(${img}); 
      height: 100%; 
      position: fixed; 
      left: 0; 
      top: 0; 
      bottom: 0; 
      right: 0;
      pointer-events: none;
      z-index: 9999
      `
    )
    this.set('dom', dom)
    body.appendChild(dom)
    this.observe()
  }
}

export default WaterMark