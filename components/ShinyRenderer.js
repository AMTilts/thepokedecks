function ShinyRenderer(size, particles, p) {
    this.clearRect(0, 0, size.width, size.height);

    function drawShinyAnim(x, y, radius, scale, angle, scaled, newImage, imager) {
          newImage.onload
          ctx.drawImage(imager, x - scaled / 2, y - scaled / 2, scaled, scaled);
          if (p.scale > 0.6) p.scale -= 0.2;
          else p.scale -= 0.05;
          p.angle -= 5;
          p.radius += 5;
    };

    drawShinyAnim(p.y, p.x, p.radius, p.scale, p.angle, '#444');
}

export default ShinyRenderer;