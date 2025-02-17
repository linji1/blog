	<!-- 距离 63 岁 -->
            startclock2()
            var timerID = null;
            var timerRunning = false;

            // 判断是否为闰年的函数
            function isLeapYear(year) {
                return (year % 4 === 0 && year % 100!== 0) || year % 400 === 0;
            }

            function showtime2() {
                // 获取当前时间并转换为东八区时间（北京时间）
                var offset = new Date().getTimezoneOffset();
                var now = new Date(Date.now() + offset * 60 * 1000 + 8 * 60 * 60 * 1000);
                var NowHour = now.getHours();
                var NowMinute = now.getMinutes();
                var NowMonth = now.getMonth();
                var NowDate = now.getDate();
                var NowYear = now.getFullYear();
                var NowSecond = now.getSeconds();

                var targetYear = 2042;
                var targetMonth = 9;
                var targetDate = 8;

                var Yearleft = targetYear - NowYear;
                var Monthleft = targetMonth - NowMonth - 1;
                var Dateleft = targetDate - NowDate;

                // 处理时间差值计算，考虑各种边界情况以及闰年
                if (Dateleft < 0) {
                    Monthleft--;
                    if (NowMonth === 1) {
                        // 处理2月情况，区分闰年和平年
                        if (isLeapYear(NowYear)) {
                            Dateleft += 29;
                        } else {
                            Dateleft += 28;
                        }
                    } else {
                        var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                        Dateleft += monthDays[NowMonth];
                    }
                }

                if (Monthleft < 0) {
                    Monthleft += 12;
                    Yearleft--;
                }

                var Hourleft = 24 - NowHour;
                var Minuteleft = 0 - NowMinute;
                var Secondleft = 0 - NowSecond;

                if (Secondleft < 0) {
                    Secondleft = 60 + Secondleft;
                    Minuteleft = Minuteleft - 1;
                }
                if (Minuteleft < 0) {
                    Minuteleft = 60 + Minuteleft;
                    Hourleft = Hourleft - 1;
                }
                if (Hourleft < 0) {
                    Hourleft = 24 + Hourleft;
                    Dateleft = Dateleft - 1;
                    if (Dateleft < 0) {
                        Dateleft += 31;
                        Monthleft = Monthleft - 1;
                        if (Monthleft < 0) {
                            Monthleft += 12;
                            Yearleft = Yearleft - 1;
                        }
                    }
                }

                var cc = document.getElementById('life1001');
                cc.innerHTML = '' + Yearleft +' 年 '+ Monthleft +' 月 '+ Dateleft +' 天 '+ Hourleft +' 时 '+ Minuteleft +' 分 '+ Secondleft +' 秒';
                timerID = setTimeout("showtime2()", 1000);
                timerRunning = true;
            }

            var timerID = null;
            var timerRunning = false;

            function stopclock2() {
                if (timerRunning)
                    clearTimeout(timerID);
                timerRunning = false;
            }

            function startclock2() {
                stopclock2();
                showtime2();
            }
            // -->

        <!-- 距离 63 岁 -->

        // 判断是否为闰年的函数
        function isLeapYear(year) {
            return (year % 4 === 0 && year % 100!== 0) || year % 400 === 0;
        }

        // 计算两个日期之间时间差，并精确计算月份差的函数
        function calculateTimeDifference(startDate, endDate) {
            const diffInMilliseconds = endDate - startDate;

            // 先计算完整的年份差
            const years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365));
            // 扣除已计算的年份对应的毫秒数，得到剩余毫秒数用于后续计算
            let remainingMilliseconds = diffInMilliseconds % (1000 * 60 * 60 * 24 * 365);

            // 计算月份差，通过逐月递减剩余毫秒数并统计月份
            let months = 0;
            const monthsInYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            const startYear = startDate.getFullYear();
            for (let i = 0; i < 12; i++) {
                const daysInMonth = i === 1 && isLeapYear(startYear + years)? 29 : monthsInYear[i];
                const millisecondsInMonth = 1000 * 60 * 60 * 24 * daysInMonth;
                if (remainingMilliseconds >= millisecondsInMonth) {
                    months++;
                    remainingMilliseconds -= millisecondsInMonth;
                } else {
                    break;
                }
            }

            // 计算天数差
            const days = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24));
            remainingMilliseconds %= (1000 * 60 * 60 * 24);

            // 计算小时差
            const hours = Math.floor(remainingMilliseconds / (1000 * 60 * 60));
            remainingMilliseconds %= (1000 * 60 * 60);

            // 计算分钟差
            const minutes = Math.floor(remainingMilliseconds / (1000 * 60));
            remainingMilliseconds %= (1000 * 60);

            // 计算秒数差
            const seconds = Math.floor(remainingMilliseconds / 1000);

            return {
                years,
                months,
                days,
                hours,
                minutes,
                seconds
            };
        }

        function updateClock(elementId, startDateStr) {
            const startDate = new Date(startDateStr);
            startDate.setTime(startDate.getTime() + 8 * 60 * 60 * 1000); // 转换为北京时间

            function updateTimeDisplay() {
                const endDate = new Date();
                endDate.setTime(endDate.getTime() + 8 * 60 * 60 * 1000); // 转换为北京时间

                const { years, months, days, hours, minutes, seconds } = calculateTimeDifference(startDate, endDate);

                document.getElementById(elementId).innerHTML = `${years} 年 ${months} 月 ${days} 天 ${hours} 时 ${minutes} 分 ${seconds} 秒`;
            }

            // 每隔1秒更新一次时间差显示
            setInterval(updateTimeDisplay, 1000);
        }
	
        updateClock("tnbsClocks", "2022-07-01T00:00:00");
        updateClock("zcyjClocks", "2011-11-01T00:00:00");
        updateClock("DangyenClocksZ", "2011-10-11T00:00:00");
        updateClock("JhClocksZ", "2007-07-01T00:00:00");
        updateClock("ydClock", "2007-03-21T23:39:10");
        updateClock("zjClock", "2001-09-01T00:00:00");
        updateClock("zjClocka", "2001-09-01T00:00:00");   
        updateClock("WebClocks", "2001-07-01T00:00:00");
        updateClock("divClocks", "1977-10-26T00:00:00");