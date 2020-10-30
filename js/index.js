class CountdownTimer {

    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.refs = this.getRefs();
    };

    run = function() {

      setInterval(() => {
        const time = this.targetDate - Date.now(); 
        this.refresh(time); 
      }, 1000);

    }

    getRefs = function() {

      const container = document.querySelector(`#${this.selector}`);
      const days = container.querySelector('[data-value="days"]');
      const hours = container.querySelector('[data-value="hours"]');
      const mins = container.querySelector('[data-value="mins"]');
      const secs = container.querySelector('[data-value="secs"]'); 
      return {days, hours, mins, secs};

    }

    getFormat = function(str) {
        return String(str).padStart(2, '0');
    }

    refresh = function(time) {

        const {days, hours, mins, secs} = this.refs;
        days.textContent = this.getFormat(Math.floor(time / (1000 * 60 * 60 * 24)));
        hours.textContent = this.getFormat(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        mins.textContent = this.getFormat(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        secs.textContent = this.getFormat(Math.floor((time % (1000 * 60)) / 1000));  

    }

    
        
    
};

const timer  = new CountdownTimer({
    selector: 'timer-1',
    targetDate: new Date('November 12, 2020, 00:00:01'),
});

timer.run();



