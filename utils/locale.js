import UserStore from "../datastore/UserStore";
import { observer } from "mobx-react";

const LOCALE = {
    TOTAL:{th:'รวม',en:'Total'},
    ITEMS:{th:'ชิ้น',en:'Item(s)'},
    EMPTY_CART:{th:'ไม่มีสินค้าในตะกร้า',en:'No Product in Cart'},
    FINISH_CHECKOUT:{th:'จ่ายเงินเสร็จสิ้น',en:'Checkout is completed'},
    BACK_TO_HOME:{th:'กลับสู่หน้าหลัก',en:'Back to Home'},
    USERNAME:{th:'ชื่อผู้ใช้งาน',en:'User Name'},
    PASSWORD:{th:'รหัสผ่าน',en:'Password'},
    LOGIN:{th:'เข้าสู่ระบบ',en:'Log in'},
    CART:{th:'ตะกร้าสินค้า',en:'Cart'},
    CHECKOUT:{th:'ชำระเงิน',en:'Checkout'},
    INCORRECT_LOGIN:{th:'ชื่อผู้ใช้/รหัสผ่านผิดพลาด',en:'Username/Password is incorrect'},
    PRODUCT_DETAIL:{th:'รายละเอียดสินค้า',en:'Product Detail'},
    PRODUCT_LIST:{th:'รายการสินค้า',en:'Product List'},
    ADD_TO_CART:{th:'ใส่ตะกร้า',en:'Add to Cart'},
    ADD_TO_CART_SUCCESS:{th:'สินค้าใส่ตะกร้าแล้ว',en:'Product is successfully added to cart'},
    WARN_NEGATIVE:{th:'กรุณาใส่จำนวนเต็มบวก',en:'Please input positive integer'},
    SETTING:{th:'ตั้งค่า',en:'Setting'},
    SIGN_OUT:{th:'ออกจากระบบ',en:'Sign out'},
}


const localize=(localeObject)=>{
    return localeObject[UserStore.locale]
}

export { LOCALE, localize }