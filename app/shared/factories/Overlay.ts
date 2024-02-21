function createOverlay(
  container: HTMLElement,
  position: google.maps.LatLngLiteral
) {
  class Overlay extends google.maps.OverlayView {
    constructor(
      private container: HTMLElement,
      private position: google.maps.LatLngLiteral
    ) {
      super()
    }

    onAdd() {
      const panes = this.getPanes()!
      panes.floatPane.appendChild(this.container)
    }

    draw() {
      const projection = this.getProjection()
      const point = projection.fromLatLngToDivPixel(this.position)

      if (point === null) {
        return
      }

      this.container.style.transform = `translate(${point.x}px, ${point.y}px)`
    }

    onRemove() {
      if (this.container.parentNode !== null) {
        this.container.parentNode.removeChild(this.container)
      }
    }
  }

  return new Overlay(container, position)
}

export default createOverlay
