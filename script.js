// استيراد مكتبة Node.js لقياس استخدام وحدة المعالجة المركزية
const cpuStats = require('cpu-stats');

// وظيفة لتعطيل وحدة المعالجة المركزية
function disableCPU() {
  // الحصول على معلومات عن استخدام وحدة المعالجة المركزية
  cpuStats.getCPUStats((err, stats) => {
    if (err) {
      console.error('Error getting CPU stats:', err);
      return;
    }

    // الحصول على نسبة استخدام وحدة المعالجة المركزية
    const cpuUsage = stats.usage.cpu;

    // تعيين استخدام وحدة المعالجة المركزية إلى 100٪
    process.cpuUsage(1);
    console.log('CPU disabled');
  });
}

// تعطيل وحدة المعالجة المركزية
disableCPU();
