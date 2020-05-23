class WaterMark {
  defaultOpts = {
    height: 50,
    width: 100,
    fontSize: 16,
    rotate: -30,
    fillStyle: '#ccc'
  }

  constructor(options) {
    this._cfg = {...this.defaultOpts, ...options}

    this.createCanvas()
    this.draw()
  }


  set(key, value) {
    this._cfg[key] = value
  }

  get(key) {
    return this._cfg[key]
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

  

  draw() {
    const canvas = this.get('canvas')
    const img = canvas.toDataURL('image/png', 1.0)
    const body = document.querySelector('body')
    const div = document.createElement('div')
    div.setAttribute('style', `background-image:url(${img}); height: 100%; position: fixed; left: 0; top: 0; bottom: 0; right: 0`)
    div.setAttribute('id', 'water-mark')
    body.appendChild(div)
  }

}

export default WaterMark