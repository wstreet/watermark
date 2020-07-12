class WaterMark {
  defaultOpts = {
    height: 50,
    width: 100,
    fontSize: 16,
    rotate: -30,
    fillStyle: '#ccc',
    fontWeight: 400
  }

  constructor(options) {
    this._cfg = {...this.defaultOpts, ...options}

    this.createObserver()
    this.createCanvas()
    this.draw()
    
  }


  set(key, value) {
    this._cfg[key] = value
  }

  get(key) {
    return this._cfg[key]
  }

  createObserver() {
    this.observer = new MutationObserver((m, o) => {
      console.log(m)
      const body = document.querySelector('body')
      const dom = this.get('dom')
      body.removeChild(dom)
      this.draw()
    });
  }

  createCanvas() {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const height = this.get('height')
    const width = this.get('width')
    canvas.height = height
    canvas.width = width

    const fontSize = this.get('fontSize')
    const text = this.get('text')
    const rotate = this.get('rotate')
    const fillStyle = this.get('fillStyle')
    
    ctx.fillStyle = fillStyle
    ctx.font=`${fontSize}px`;
    ctx.rotate(rotate / Math.PI * 2)
    ctx.translate(0, height / 2)
    ctx.fillText(text, 0, height / 2 )

    this.set('canvas', canvas)
    this.set('ctx', ctx)
  }

  observe() {
    const dom = this.get('dom');
    if (dom) {
      this.observer.observe(dom, {
        attributes: true,
        characterData: true,
        childList: true
      })
    }
  }

  

  draw() {
    const canvas = this.get('canvas')
    const img = canvas.toDataURL('image/png', 1.0)
    const body = document.querySelector('body')
    const dom = document.createElement('div')
    dom.setAttribute('id', 'water-mark')
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