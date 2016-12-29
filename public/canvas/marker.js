function marker(x, y, xmove, ymove, ymax, ymin,ymult) {
    this.x = x;
    this.y = y;
    this.ymulti = 1;


    //this.v = createVector(this.x,this.y);

    this.history = [];


    //stop here
    this.update = function() {
        if (this.y >= ymin && this.y <= ymax) {
            this.x = this.x + xmove;
            this.ymulti = this.ymulti*ymult;
            this.y = this.y - ymove*this.ymulti;

        }


        this.v = createVector(this.x, this.y);
        this.history.push(this.v);

    }

    this.show = function() {
        fill(255, 255, 255,0);
        ellipse(this.x, this.y, 1, 1);

        for (var i = 0; i < this.history.length; i++) {
            var pos = this.history[i];
            ellipse(pos.x, pos.y, 10, 10);
        }


    }

}
