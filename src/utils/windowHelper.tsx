// WindowResizeHelper.ts

class WindowResizeHelper {
    private breakpoint: number;
    private defaultSlidesPerView: number;
    private callback: (slidesPerView: number) => void;
  
    constructor(
      breakpoint: number,
      defaultSlidesPerView: number,
      callback: (slidesPerView: number) => void
    ) {
      this.breakpoint = breakpoint;
      this.defaultSlidesPerView = defaultSlidesPerView;
      this.callback = callback;
  
      this.handleResize = this.handleResize.bind(this);
  
      // Add event listener for window resize
      window.addEventListener("resize", this.handleResize);
  
      // Initial call to handleResize
      this.handleResize();
    }
  
    private handleResize() {
      const slidesPerView = window.innerWidth > this.breakpoint ? 3 : this.defaultSlidesPerView;
      this.callback(slidesPerView);
    }
  
    public cleanup() {
      window.removeEventListener("resize", this.handleResize);
    }
  }
  
  export default WindowResizeHelper;
  