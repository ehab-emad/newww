import * as React from "react";
import '../../App.css'
const styles = {
  ordersfilter: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    gap: "16px",
    color: "var(--Paragraph, #736e67)",
    textAlign: "right",
    flexWrap: "nowrap",
    padding: "8px 16px",
    font: "400 14px Expo Arabic, -apple-system, Roboto, Helvetica, sans-serif"
  },
  img: {
    aspectRatio: "1",
    objectFit: "contain",
    objectPosition: "center",
    width: "20px",
    margin: "auto 0",
    opacity: 0 // Make the image fully transparent

  },
  تاريخالتعديل: {
    width: "20%",
    textAlign: "center",

  },
  مدةالتأجير: {
    width: "20%",
    textAlign: "center",

  },
  المبلغالمدفوع: {
    width: "20%",

    textAlign: "center",

  },
  حالةالطلب: {
    width: "20%",

    textAlign: "center",

  },
  اسمالعميل: {
    width: "20%",

    textAlign: "center",
  },
  بياناتالطلب: {
    width: "20%",

    textAlign: "right",
  },
  رقمالطلب: {
    width: "20%",

    textAlign: "center"

  }
};

function HeaderRequest() {
  return (
    <div style={styles.ordersfilter} className="hide">
      {/* <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba46c6258edc43c97407c644dd100193a11504a5317d3de870704110203e9b84?placeholderIfAbsent=true&apiKey=d450998b662b4d7f9d8aea2e6e480818"
        style={styles.img}
        alt=""
      /> */}
      <div style={styles.تاريخالتعديل}>إجراءات</div>

      <div style={styles.تاريخالتعديل}>تاريخ التعديل</div>
      {/* <div style={styles.مدةالتأجير}>مدة التأجير</div> */}
      <div style={styles.المبلغالمدفوع}> السعر</div>
      <div style={styles.حالةالطلب}>اسم المالك</div>
      <div style={styles.اسمالعميل}> التصنيف</div>
      <div style={styles.بياناتالطلب}>بيانات المنتج</div>
      <div style={styles.رقمالطلب}> الصوره</div>
    </div>
  );
}

export default HeaderRequest;