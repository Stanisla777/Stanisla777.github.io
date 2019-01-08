(function ($) {

    $.fn.downCount = function (options, callback) {
        var settings = $.extend({
                date: null,
                offset: null
            }, options);

        // Throw error if date is not set
        if (!settings.date) {
            $.error('Date is not defined.');
        }

        // Throw error if date is set incorectly
        if (!Date.parse(settings.date)) {
            $.error('Incorrect date format, it should look like this, 12/24/2012 12:00:00.');
        }

        // Save container
        var container = this;

        /**
         * Change client's local date to match offset timezone
         * @return {Object} Fixed Date object.
         */
        var currentDate = function () {
            // get client's current date
            var date = new Date();

            // turn date to utc
            var utc = date.getTime() + (date.getTimezoneOffset());

            // set new Date object
            var new_date = new Date(utc + (3600000*settings.offset))

            return new_date;
        };

        /**
         * Main downCount function that calculates everything
         */
        function countdown () {
            var target_date = new Date(settings.date), // set target date
                current_date = currentDate(); // get fixed current date

            // difference of dates
            var difference = target_date - current_date;

            // if difference is negative than it's pass the target date
            if (difference < 0) {
                // stop timer
                clearInterval(interval);

                if (callback && typeof callback === 'function') callback();

                return;
            }

            // basic math variables
            var _second = 1000,
                _minute = _second * 60,
                _hour = _minute * 60,
                _day = _hour * 24;

            // calculate dates
            var days = Math.floor(difference / _day),
                hours = Math.floor((difference % _day) / _hour),
                minutes = Math.floor((difference % _hour) / _minute),
                seconds = Math.floor((difference % _minute) / _second);

                // fix dates so that it will show two digets
                //days = (String(days).length >= 2) ? days : '0' + days;
                //hours = (String(hours).length >= 2) ? hours : '0' + hours;
                //minutes = (String(minutes).length >= 2) ? minutes : '0' + minutes;
                //seconds = (String(seconds).length >= 2) ? seconds : '0' + seconds;

            // based on the date change the refrence wording
            var //ref_days = (days === 1) ? 'дни' : 'дни',
                //ref_hours = (hours === 1) ? 'часы' : 'часы',
                //ref_minutes = (minutes === 1) ? 'мин' : 'мин',
                ref_seconds = (seconds === 1) ? 'сек' : 'сек';



            function num2str(n, text_forms) {
                n = Math.abs(n) % 100; var n1 = n % 10;
                if (n > 10 && n < 20) { return text_forms[2]; }
                if (n1 > 1 && n1 < 5) { return text_forms[1]; }
                if (n1 == 1) { return text_forms[0]; }
                return text_forms[2];
            }

            var ref_days = $('.countdown_2 .days').text();
            ref_days = parseFloat(ref_days);

            var ref_hours = $('.countdown_2 .hours').text();
            ref_hours = parseFloat(ref_hours);

            var ref_minutes = $('.countdown_2 .minutes').text();
            ref_minutes = parseFloat(ref_minutes);


            //$('.days_ref').text(num2str(ref_days, ['день', 'дня', 'дней']));

            // set to DOM
            container.find('.days').text(days);
            container.find('.hours').text(hours);
            container.find('.minutes').text(minutes);
            container.find('.seconds').text(seconds);

            container.find('.days_ref').text(num2str(ref_days, ['день', 'дня', 'дней']));
            container.find('.hours_ref').text(num2str(ref_hours, ['час', 'часа', 'часов']));
            container.find('.minutes_ref').text(num2str(ref_minutes, ['минута', 'минуты', 'минут']));
            //container.find('.seconds_ref').text(ref_seconds);
        };


        
        // start
        var interval = setInterval(countdown, 1000);
    };

})(jQuery);