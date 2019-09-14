function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_PRINT(A4));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.draw_slits(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(20);

}

function setup_layers(pScope){
  var layer1 = new PLayer(skeleton, background1);
  layer1.mode( RING );
  layer1.set_boundary( 444, 1000 );

  var layer2 = new PLayer(moon, background2);
  layer2.mode( RING );
  layer2.set_boundary( 0, 444);
}

function background1(animation, pScope){
  var col1 = color(4, 0, 30);
  pScope.fill_background(col1);
}

function skeleton(x, y, animation, pScope){
  var col = color(254, 255, 229);
  var hatCol = color(216, 0, 28);
  scale(0.6);
  y = y-1100-400*animation.wave()*0.2;
  x = x+43;
  var headW = 100;
  var headH = 100;
  var teeth = 25;
  var eyeW = 30;
  var eyeH = 20;
  var spaceX = 20;

  fill(col);
  noStroke();
  //head
  ellipse(x, y-200, headW, headH);
  rectMode(CENTER);
  rect(x, y-170, headW-10, headH/2, 15);
  //teeth
  ellipse(x-25, y-150, teeth, teeth*1.5);
  ellipse(x, y-150, teeth, teeth*1.5);
  ellipse(x+25, y-150, teeth, teeth*1.5);
  //eyes
  fill(0);
  ellipse(x-25, y-190, eyeW, eyeH);
  ellipse(x+25, y-190, eyeW, eyeH);
  //nose
  triangle(x, y-180, x-10, y-160, x+10, y-160);
  //spine
  fill(col);
  ellipse(x, y-120, 25, 15);
  ellipse(x, y-100, 25, 15);
  ellipse(x, y+40, 25, 15);
  ellipse(x, y+60, 25, 15);
  ellipse(x, y+80, 25, 15);
  //shoulders
  rect(x-40, y-100, 40, 10, 25);
  rect(x+40, y-100, 40, 10, 25);
  //ribs
  stroke(col);
  strokeWeight(10);
  noFill();
  bezier(x-60, y-80, x-50, y-70, x-15, y-50, x-5, y-75);
  bezier(x+60, y-80, x+50, y-70, x+15, y-50, x+5, y-75);
  bezier(x-55, y-50, x-50, y-45, x-15, y-20, x-5, y-45);
  bezier(x+55, y-50, x+50, y-45, x+15, y-20, x+5, y-45);
  bezier(x-50, y-20, x-50, y-20, x-15, y+10, x-5, y-15);
  bezier(x+50, y-20, x+50, y-20, x+15, y+10, x+5, y-15);
  bezier(x-45, y+10, x-50, y+10, x-15, y+40, x-5, y+15);
  bezier(x+45, y+10, x+50, y+10, x+15, y+40, x+5, y+15);
  //hips
  ellipse(x-30, y+100, 30, 20);
  ellipse(x+30, y+100, 30, 20);
  fill(col);
  ellipse(x, y+110, 40, 20);

  //left legs
  push();
  translate(x-30, y+100);
  rotate(60*animation.wave()/2);
  strokeWeight(20);
  line(0, +30, -5, +90); //left thigh
  noStroke();
  ellipse(-5, 110, 20, 15); //left knee
  stroke(col);
  strokeWeight(20);
  push()
  translate(-5, 110);
  rotate(-60*animation.wave());
  line(0, 20, -5, 90); //left calf
  //feet
  noStroke();
  push();
  translate(-15, 120);
  rotate(-35);
  ellipse(0, 0, 50,20);
  pop()
  //left toes
  ellipse(-25, 145, 10, 10);
  ellipse(-35, 140, 8, 8);
  ellipse(-42, 135, 6, 6);
  ellipse(-47, 130, 5, 5);
  pop();
  pop();
  //right legs
  push();
  translate(x+30, y+100);
  rotate(-60*animation.wave()/2);
  strokeWeight(20);
  line(0, 30, 5, 90); //right thigh
  noStroke();
  ellipse(5, 110, 20, 15); //right knee
  stroke(col);
  strokeWeight(20);
  push()
  translate(5, 110);
  rotate(60*animation.wave());
  line(0, 20, 0, 90); //right calf
  noStroke();
  push();
  translate(15, 120);
  rotate(35);
  ellipse(0, 0, 50,20);
  pop();
  //right toes
  ellipse(25, 145, 10, 10);
  ellipse(35, 140, 8, 8);
  ellipse(42, 135, 6, 6);
  ellipse(47, 130, 5, 5);
  pop();
  pop();
  //hat
  noStroke();
  fill(hatCol);
  push();
  translate(x-150, y-145);
  rotate(-70*animation.wave());
  rect(150, -130, 100, 100, 10);
  ellipse(150, -75, 150, 20);
  pop();
  //left arm
  stroke(col);
  strokeWeight(20);
  line(x-80, y-90, x-150, y-120); //upper
  push();
  translate(x-150, y-145);
  rotate(-70*animation.wave());
  line(0, 0, 70, -65); //forearm
  strokeWeight(5);
  line(90, -75, 85, -65);
  line(80, -75, 90, -75);
  pop();
  //right arm
  stroke(col);
  strokeWeight(20);
  line(x+80, y-90, x+90, y); //upper
  line(x+90, y+25, x+80, y+90); //forearm
  strokeWeight(5);
  line(x+90, y+110, x+95, y+120);
  line(x+80, y+110, x+80, y+120);
  line(x+70, y+110, x+65, y+120);
}

function background2(animation, pScope){
  var col1 = color(244, 234, 117);
  var col2 = color(226, 222, 165);
  var blend = lerpColor(col1, col2, animation.wave());
  pScope.fill_background(blend);
}

function moon(x, y, animation, pScope){
  fill(200);
  ellipse(x-10, y-100, 10*animation.wave(), 10*animation.wave());
  ellipse(x+5, y-150, 20*animation.wave(), 20*animation.wave());
  ellipse(x, y-180, 15*animation.wave(), 15*animation.wave());
  ellipse(x+20, y-250, 30*animation.wave(), 30*animation.wave());
  ellipse(x-15, y-300, 10*animation.wave(), 10*animation.wave());
  ellipse(x-10, y-400, 50*animation.wave(), 50*animation.wave());
  ellipse(x+30, y-350, 20*animation.wave(), 20*animation.wave());
}
