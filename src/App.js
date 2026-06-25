import { useState } from "react";
import "./App.css";

const screens = ["splash","onboarding","home","restaurant","cart","tracking"];

export default function App() {
  const [screen, setScreen] = useState("splash");
  const go = (s) => setScreen(s);
  return (
    <div className="wrapper">
      <div className="page-nav">
        {screens.map((s,i) => (
          <button key={s} className={`pnav-btn ${screen===s?"active":""}`} onClick={()=>go(s)}>
            {i+1}. {s}
          </button>
        ))}
      </div>
      <div className="phone">
        {screen==="splash" && <Splash go={go}/>}
        {screen==="onboarding" && <Onboarding go={go}/>}
        {screen==="home" && <Home go={go}/>}
        {screen==="restaurant" && <Restaurant go={go}/>}
        {screen==="cart" && <Cart go={go}/>}
        {screen==="tracking" && <Tracking go={go}/>}
      </div>
    </div>
  );
}

function Splash({go}){
  return(
    <div className="screen splash">
      <div className="splash-rings"/>
      <div className="splash-logo">Nom<span>Nom</span></div>
      <div className="splash-tag">Eat what you love</div>
      <button className="btn-coral" onClick={()=>go("onboarding")}>Get Started</button>
      <p className="splash-signin">Already have an account? <span onClick={()=>go("home")}>Sign in</span></p>
    </div>
  );
}

function Onboarding({go}){
  return(
    <div className="screen onboarding">
      <div className="ob-hero"><div className="ob-plate">🍔</div></div>
      <div className="ob-dots">
        <span className="dot active"/><span className="dot"/><span className="dot"/>
      </div>
      <div className="ob-content">
        <h1 className="ob-title">Food you love,<br/><span>delivered fast</span></h1>
        <p className="ob-sub">Order from hundreds of local restaurants and get your food delivered in minutes.</p>
      </div>
      <div className="ob-actions">
        <button className="btn-coral" onClick={()=>go("home")}>Continue</button>
        <button className="btn-ghost">Skip for now</button>
      </div>
    </div>
  );
}

function Home({go}){
  const cats=["🍔 Burgers","🍕 Pizza","🍜 Noodles","🌮 Mexican","🍱 Japanese","🥗 Healthy"];
  const [active,setActive]=useState(0);
  return(
    <div className="screen home">
      <div className="scroll-area">
        <div className="home-header">
          <p className="greeting">Good afternoon, Mahim</p>
          <h2 className="home-title">What are you<br/><span>craving today?</span></h2>
        </div>
        <div className="search-bar">
          <span>🔍</span>
          <input placeholder="Search restaurants or dishes..."/>
          <span style={{color:"#FF6B47"}}>⚙️</span>
        </div>
        <div className="cats">
          {cats.map((c,i)=>(
            <button key={i} className={`cat-chip ${active===i?"active":""}`} onClick={()=>setActive(i)}>{c}</button>
          ))}
        </div>
        <div className="promo-banner">
          <div>
            <p className="promo-tag">Today only</p>
            <p className="promo-deal"><span>50% OFF</span></p>
            <p className="promo-sub">Use code: NOMNOM50</p>
          </div>
          <button className="promo-cta">Grab Deal</button>
        </div>
        <div className="section-header">
          <span className="section-label">Popular Near You</span>
          <span className="see-all">See all</span>
        </div>
        <div className="rest-list">
          {[
            {emoji:"🍔",name:"Burger Republic",rating:"4.8",time:"20–30",delivery:"Free",tags:["Burgers","Fast Food"],badge:"20% OFF",badgeType:"promo"},
            {emoji:"🌿",name:"Green Garden Cafe",rating:"4.6",time:"25–35",delivery:"RM 2",tags:["Healthy","Salads"],badge:"Popular",badgeType:""},
            {emoji:"🍕",name:"Pizza Planet",rating:"4.7",time:"30–40",delivery:"RM 3",tags:["Pizza","Italian"],badge:"",badgeType:""},
          ].map((r,i)=>(
            <div key={i} className="rest-card" onClick={()=>go("restaurant")}>
              <div className="rest-img">
                {r.emoji}
                {r.badge&&<span className={`rest-badge ${r.badgeType}`}>{r.badge}</span>}
              </div>
              <div className="rest-info">
                <p className="rest-name">{r.name}</p>
                <div className="rest-meta">
                  <span className="rating">⭐ {r.rating}</span>
                  <span>🕐 {r.time} min</span>
                  <span>🛵 {r.delivery}</span>
                </div>
                <div className="rest-tags">
                  {r.tags.map(t=><span key={t} className="rest-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav active="home" go={go}/>
    </div>
  );
}

function Restaurant({go}){
  const items=[
    {e:"🍔",name:"Classic Smash Burger",desc:"Double smashed patty, cheddar, pickles, special sauce",price:"RM 18.90"},
    {e:"🔥",name:"Spicy Chicken Crunch",desc:"Crispy fried chicken, jalapeño slaw, sriracha mayo",price:"RM 16.90"},
    {e:"🥑",name:"Avocado BBQ Stack",desc:"Wagyu beef, avocado, caramelised onion, BBQ glaze",price:"RM 24.90"},
    {e:"🍟",name:"Loaded Fries",desc:"Thick-cut fries, cheese sauce, bacon bits",price:"RM 10.90"},
  ];
  return(
    <div className="screen restaurant">
      <div className="rest-hero">
        🍔
        <div className="hero-nav">
          <button className="hero-btn" onClick={()=>go("home")}>←</button>
          <button className="hero-btn">♡</button>
        </div>
      </div>
      <div className="scroll-area" style={{paddingBottom:80}}>
        <div className="rest-detail-card">
          <h2 className="rest-detail-name">Burger Republic</h2>
          <div className="rest-detail-meta">
            <span>⭐ 4.8 (320+ reviews)</span>
            <span style={{color:"#00C896"}}>● Open now</span>
            <span>🕐 20–30 min</span>
            <span>🛵 Free delivery</span>
          </div>
        </div>
        <div className="menu-tabs">
          {["All","Burgers","Sides","Drinks","Desserts"].map((t,i)=>(
            <button key={t} className={`menu-tab ${i===0?"active":""}`}>{t}</button>
          ))}
        </div>
        <div className="menu-list">
          {items.map((item,i)=>(
            <div key={i} className="menu-item" onClick={()=>go("cart")}>
              <div className="menu-img">{item.e}</div>
              <div className="menu-info">
                <p className="menu-name">{item.name}</p>
                <p className="menu-desc">{item.desc}</p>
                <div className="menu-bottom">
                  <span className="menu-price">{item.price}</span>
                  <button className="add-btn" onClick={(e)=>{e.stopPropagation();go("cart")}}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav active="restaurant" go={go}/>
    </div>
  );
}

function Cart({go}){
  const [qty,setQty]=useState([2,1,1]);
  const prices=[19.90,10.90,9.90];
  const items=[
    {e:"🍔",name:"Classic Smash Burger",sub:"Regular • Extra cheese"},
    {e:"🍟",name:"Loaded Fries",sub:"Large"},
    {e:"🥤",name:"Chocolate Milkshake",sub:"Large"},
  ];
  const subtotal=qty.reduce((a,q,i)=>a+q*prices[i],0);
  const tax=subtotal*0.06;
  const discount=subtotal*0.5;
  const total=subtotal+tax-discount;
  return(
    <div className="screen cart">
      <div className="nav-bar">
        <button className="nav-back" onClick={()=>go("restaurant")}>←</button>
        <span className="nav-title">Your Cart</span>
        <div style={{width:36}}/>
      </div>
      <div className="scroll-area" style={{paddingBottom:20}}>
        <p className="cart-from">🏪 Burger Republic</p>
        <div className="cart-items">
          {items.map((item,i)=>(
            <div key={i} className="cart-item">
              <div className="cart-img">{item.e}</div>
              <div className="cart-info">
                <p className="cart-name">{item.name}</p>
                <p className="cart-sub">{item.sub}</p>
                <div className="cart-bottom">
                  <span className="cart-price">RM {(qty[i]*prices[i]).toFixed(2)}</span>
                  <div className="qty-ctrl">
                    <button onClick={()=>setQty(q=>q.map((v,j)=>j===i?Math.max(1,v-1):v))}>−</button>
                    <span>{qty[i]}</span>
                    <button onClick={()=>setQty(q=>q.map((v,j)=>j===i?v+1:v))}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="promo-row">
          <input placeholder="Promo code" className="promo-field"/>
          <button className="promo-apply">Apply</button>
        </div>
        <div className="summary">
          <div className="sum-row"><span>Subtotal</span><span>RM {subtotal.toFixed(2)}</span></div>
          <div className="sum-row"><span>Delivery fee</span><span style={{color:"#00C896"}}>Free</span></div>
          <div className="sum-row"><span>Service tax (6%)</span><span>RM {tax.toFixed(2)}</span></div>
          <div className="sum-row"><span>Promo (NOMNOM50)</span><span style={{color:"#00C896"}}>− RM {discount.toFixed(2)}</span></div>
          <div className="sum-row total"><span>Total</span><span>RM {total.toFixed(2)}</span></div>
        </div>
        <button className="checkout-btn" onClick={()=>go("tracking")}>
          <span>Place Order</span>
          <span>RM {total.toFixed(2)} →</span>
        </button>
      </div>
    </div>
  );
}

function Tracking({go}){
  const steps=[
    {label:"Order confirmed",sub:"2:41 PM — Burger Republic received your order",done:true},
    {label:"Preparing your food",sub:"2:44 PM — Kitchen is on it",done:true},
    {label:"On the way",sub:"Arif picked up your order",current:true},
    {label:"Delivered",sub:"Estimated 3:05 PM",done:false},
  ];
  return(
    <div className="screen tracking">
      <div className="nav-bar">
        <div style={{width:36}}/>
        <span className="nav-title">Order Tracking</span>
        <button className="nav-back">⋯</button>
      </div>
      <div className="scroll-area" style={{paddingBottom:24}}>
        <div className="track-header">
          <p className="order-id">Order #NOM-20847</p>
          <p className="eta"><span>22</span> mins</p>
          <p className="eta-sub">Estimated delivery time</p>
        </div>
        <div className="track-map">
          <div className="map-road"/>
          <div className="map-rider">🛵</div>
          <div className="map-pin">📍</div>
        </div>
        <div className="driver-card">
          <div className="driver-avatar">👨</div>
          <div className="driver-info">
            <p className="driver-name">Arif Rahman</p>
            <p className="driver-plate">WXY 4821 · Honda Wave</p>
          </div>
          <div className="driver-btns">
            <button className="driver-btn">📞</button>
            <button className="driver-btn">💬</button>
          </div>
        </div>
        <div className="steps">
          {steps.map((s,i)=>(
            <div key={i} className={`step ${s.done?"done":""} ${s.current?"current":""}`}>
              <div className="step-icon">{s.done?"✓":s.current?"🛵":"○"}</div>
              <div>
                <p className="step-label">{s.label}</p>
                <p className="step-sub">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BottomNav({active,go}){
  const items=[
    {icon:"🏠",label:"Home",id:"home"},
    {icon:"🔍",label:"Search",id:"search"},
    {icon:"🛍️",label:"Cart",id:"cart"},
    {icon:"♡",label:"Saved",id:"saved"},
    {icon:"👤",label:"Profile",id:"profile"},
  ];
  return(
    <div className="bottom-nav">
      {items.map(item=>(
        <button key={item.id} className={`nav-item ${active===item.id?"active":""}`} onClick={()=>go(item.id)}>
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}