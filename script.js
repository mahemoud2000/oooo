document.querySelector(".addNewOrder").addEventListener("click", () => {
    Swal.fire({
      title: ' سجل بياناتك وسيتم التواصل معك في خلال 60 دقيقة ',
      html: `
    
    
    <div class="mainForm" style="overflow-y: hidden; overflow-c: scroll; font-size: 17px!important; font-family: 'Cairo', sans-serif; font-weight: bold!important;">
        <label for="name">:الاسم</label>
        <input style="width: 98%;" class="addOrderInput" type="text" dir="auto" autocomplete="off" id="name" value="">
        <label for="phone">رقم الهاتف:</label>
        <input style="width: 98%;" class="addOrderInput" type="number" placeholder="" dir="auto" autocomplete="off" id="phone" value="">
        
        <label for="city">المحافظة/العنوان</label>
        <input style="width: 98%;" class="addOrderInput" type="text" dir="rtl" autocomplete="off" id="city" value="">
        
        <label for="email">عنوان البريد الإلكتروني:</label>
        <input style="width: 98%;" class="addOrderInput" type="text" dir="rtl" autocomplete="off" id="email" value="">
        <label for="active">ملاحظات/الطلب:</label>
        <textarea style="width: 98%; " class="addOrderInput" id="active" type="text" dir="auto" autocomplete="off" value="">اختياري</textarea>
        <label  style="display: none;" for="note">الملاحظة:</label>
        <textarea  style="width: 98%; display: none;" class="addOrderInput" type="text" dir="rtl" autocomplete="off" id="note" value="">Broccoli</textarea>
    </div>
    
    
    `,
      confirmButtonText: 'ارسال',
    }).then((result) => {
      if (result.isConfirmed) {
        let name = document.querySelector("#name").value;
        let phone = document.querySelector("#phone").value;
        let email = document.querySelector("#email").value;
        let active = document.querySelector("#active").value;
        let city = document.querySelector("#city").value;
        let note = document.querySelector("#note").value;
        function idGenerator() {
          var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
          };
          return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        };
        let id = idGenerator();
        if (name.trim() !== "" && phone.trim() !== "" && active.trim() !== "" && city.trim() !== "") {
          Swal.fire({
            title: 'Please Wait!',
            didOpen: () => {
              Swal.showLoading()
            }
          });
          AddNewOrder(name, phone, active, city, email, id);
        } else {
          Swal.fire(
            'برجاء كتابة البيانات بشكل صحيح',
            '',
            'error',
          )
        }
        function AddNewOrder(name, phone, active, city, email, id) {
          let randomOrderNumber = (Math.random() * 1000000).toFixed();
          setDoc(doc(db, "Orders", id), {
            id: id,
            name: name,
            phone: phone,
            city: city,
            active: active,
            email: email,
            note: note,
            country_calling_code: "+20",
            date: Date.now(),
            orderDate: showDate(),
            orderNumber: randomOrderNumber,
          }).then(e => {
            Swal.fire(
              'تم ارسال الطلب سنقوم بالتواصل معكم قريبا',
              '',
              'success',
            )
          });
        };
      };
    });
  });