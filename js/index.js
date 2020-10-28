const Container = document.querySelector('#timer-1');
const Days = document.querySelector('[data-value="days"]');
const Hours = document.querySelector('[data-value="hours"]');
const Mins = document.querySelector('[data-value="mins"]');
const Secs = document.querySelector('[data-value="secs"]');  

class CountdownTimer {

    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
    };

    run = function() {

        setInterval(() => {
        const time = this.targetDate - Date.now(); 
        this.refresh(time); 
        }, 1000);

    }

    getFormat = function(str) {
        return String(str).padStart(2, '0');
        }

    refresh = function(time) {

        Days.textContent = this.getFormat(Math.floor(time / (1000 * 60 * 60 * 24)));
        Hours.textContent = this.getFormat(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        Mins.textContent = this.getFormat(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        Secs.textContent = this.getFormat(Math.floor((time % (1000 * 60)) / 1000));  

    }

    
        
    
};

const timer  = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('November 12, 2020, 00:00:01'),
});

timer.run();



