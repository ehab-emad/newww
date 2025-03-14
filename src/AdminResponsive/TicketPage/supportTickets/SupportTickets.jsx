import { TicketCard } from "./TicketCard";
import { TicketHeader } from "./TicketHeader";
import { useEffect, useState } from "react";
import styles from "./SupportTickets.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { getTickets } from "../../../../../trenttest/reducers/firebasefunctions";
import { GetAllTickets } from "../../../store/reducers/sellerStuffReducer";
import { addcommentAdmin, newstateActive } from "../../../store/reducers/sellerProductsReducer";

export const SupportTickets = () => {
  
  const dispatch = useDispatch();
  const {  seller_tickets } = useSelector((state) => state.seller_stuff);
  const {  Add_comment } = useSelector((state) => state.seller_products);
const sellerid = 'zTC4dLSjCIS2I3YAl9QTJUkro0p2';
 




  // Fetch data on component mount
  useEffect(() => {

    dispatch(GetAllTickets());
     
  }, [dispatch,Add_comment]);
  const ticketData = [
    {
      id : 0,
      name : "محمد أحمد",
      type : "دعم فني",
      lastModified: "منذ ساعتين",
      date: "11/2/2024",
      status: "pending",
      title: "العنوان الخاص بالتذكرة يوضح ع الاقل تفاصيل بسيطة",
      ticketNumber: "0000",
      isSelected: true,
      attachedImages : [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9f4bc35d5a78041e5cdace778cdc15776490646a29d6ff9f6f33454886887d21?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9f4bc35d5a78041e5cdace778cdc15776490646a29d6ff9f6f33454886887d21?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9f4bc35d5a78041e5cdace778cdc15776490646a29d6ff9f6f33454886887d21?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9f4bc35d5a78041e5cdace778cdc15776490646a29d6ff9f6f33454886887d21?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
      ],
      description : "حاولت دفع الفاتورة باستخدام بطاقتي الائتمانية، لكن تظهر رسالة خطأ تقول: (فشلت عملية الدفع، يرجى المحاولة لاحقًا). أحتاج إلى حل سريع.",
      supportResponse : [
        "شكرًا لإبلاغنا بالمشكلة. بناءً على المراجعة، يبدو أن المشكلة ناتجة عن عدم تطابق في بيانات البطاقة المُدخلة. يرجى التأكد من أن بيانات البطاقة (رقم البطاقة، تاريخ الانتهاء، ورمز CVV) مُدخلة بشكل صحيح، وأن البطاقة مفعّلة للشراء عبر الإنترنت. لقد قمنا بإعادة تعيين محاولة الدفع لنفس الفاتورة. إذا استمرت المشكلة، يُرجى استخدام طريقة دفع بديلة أو التواصل مع البنك الخاص بك. نحن هنا للمساعدة في أي وقت!"
      ]
    },
    {
      id : 1,
      name : "محمد أحمد",
      type : "دعم فني",
      lastModified: "منذ ساعتين",
      date: "11/2/2024",
      status: "close",
      title: "العنوان الخاص بالتذكرة يوضح ع الاقل تفاصيل بسيطة",
      ticketNumber: "0000",
      isSelected: true,
      attachedImages : [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9f4bc35d5a78041e5cdace778cdc15776490646a29d6ff9f6f33454886887d21?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9f4bc35d5a78041e5cdace778cdc15776490646a29d6ff9f6f33454886887d21?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9f4bc35d5a78041e5cdace778cdc15776490646a29d6ff9f6f33454886887d21?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9f4bc35d5a78041e5cdace778cdc15776490646a29d6ff9f6f33454886887d21?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
      ],
      description : "حاولت دفع الفاتورة باستخدام بطاقتي الائتمانية، لكن تظهر رسالة خطأ تقول: (فشلت عملية الدفع، يرجى المحاولة لاحقًا). أحتاج إلى حل سريع.",
      supportResponse : [
       
      ]
    },
  ];
  const [ticketDataDetails , setTicketData] = useState(seller_tickets)

  const changeState = async(ticketid , newstate) => {
     const user = seller_tickets.find(user => user.id === ticketid); 
     
         if (!user) return seller_tickets;
     
         const sellerData = { ...user, active:newstate}; 
           console.log(ticketid)
     await    dispatch(newstateActive({ticketid,sellerData}))
     await  dispatch(GetAllTickets());

        
  }

  const addCommenet = (id , comment) => {
    setTicketData((prevTickets) =>
      prevTickets.map(ticket =>
        ticket.id === id
              ?   dispatch(addcommentAdmin({ 
                ...ticket, 
                supportResponse: Array.isArray(ticket.supportResponse) 
                  ? [...ticket.supportResponse, comment] 
                  : [comment] 
              }))
              : ticket
      )
  );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>تذاكر الدعم</h1>

      <div className={styles.searchBar}>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="ابحث برقم التذكرة"
          aria-label="Search by ticket number"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c16e7c36789f1ecfbecb76264816c8a0dd7f44ccb1a69b7e111f7288fd98ba80?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16"
          className={styles.searchIcon}
          alt=""
        />
      </div>

      <TicketHeader />

      {seller_tickets.map((ticket, index) => (
        <TicketCard key={index} {...ticket} changeStatus = {changeState} addCommenet = {addCommenet} />
      ))}
    </div>
  );
};
