/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
import React from 'react';
import {SvgXml} from 'react-native-svg';

export const test = (w?: any, h?: any, color?: any) => {
  const xml = ``;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const completeIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 25.6666H17.5C23.3334 25.6666 25.6667 23.3333 25.6667 17.4999V10.4999C25.6667 4.66659 23.3334 2.33325 17.5 2.33325H10.5C4.66671 2.33325 2.33337 4.66659 2.33337 10.4999V17.4999C2.33337 23.3333 4.66671 25.6666 10.5 25.6666Z" stroke="#039855" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.04163 13.9999L12.3433 17.3016L18.9583 10.6982" stroke="#039855" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const taskModifierIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.6666 7.58325H18.6666" stroke="#667085" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.00004 7.58325H2.33337" stroke="#667085" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6667 11.6667C13.9219 11.6667 15.75 9.8385 15.75 7.58333C15.75 5.32817 13.9219 3.5 11.6667 3.5C9.41154 3.5 7.58337 5.32817 7.58337 7.58333C7.58337 9.8385 9.41154 11.6667 11.6667 11.6667Z" stroke="#667085" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.6667 20.4167H21" stroke="#667085" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33337 20.4167H2.33337" stroke="#667085" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.3333 24.4999C18.5885 24.4999 20.4167 22.6717 20.4167 20.4166C20.4167 18.1614 18.5885 16.3333 16.3333 16.3333C14.0782 16.3333 12.25 18.1614 12.25 20.4166C12.25 22.6717 14.0782 24.4999 16.3333 24.4999Z" stroke="#667085" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const plusIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3333 14.6667H16.6667V5C16.6667 4.44772 16.219 4 15.6667 4C15.1144 4 14.6667 4.44772 14.6667 5V14.6667H5C4.44772 14.6667 4 15.1144 4 15.6667C4 16.219 4.44772 16.6667 5 16.6667H14.6667V26.3333C14.6667 26.8856 15.1144 27.3333 15.6667 27.3333C16.219 27.3333 16.6667 26.8856 16.6667 26.3333V16.6667H26.3333C26.8856 16.6667 27.3333 16.219 27.3333 15.6667C27.3333 15.1144 26.8856 14.6667 26.3333 14.6667Z" fill=${
    color ?? '#444CE7'
  }/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const doubleSaveIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.89 5.88H5.10999C3.39999 5.88 2 7.27999 2 8.98999V20.35C2 21.8 3.04 22.42 4.31 21.71L8.23999 19.52C8.65999 19.29 9.34 19.29 9.75 19.52L13.68 21.71C14.95 22.42 15.99 21.8 15.99 20.35V8.98999C16 7.27999 14.6 5.88 12.89 5.88Z" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 8.98999V20.35C16 21.8 14.96 22.41 13.69 21.71L9.76001 19.52C9.34001 19.29 8.65999 19.29 8.23999 19.52L4.31 21.71C3.04 22.41 2 21.8 2 20.35V8.98999C2 7.27999 3.39999 5.88 5.10999 5.88H12.89C14.6 5.88 16 7.27999 16 8.98999Z" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const backIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19.92L8.47997 13.4C7.70997 12.63 7.70997 11.37 8.47997 10.6L15 4.07996" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const nextIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.91003 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91003 4.07996" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const menuIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7H21" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-linecap="round"/>
<path d="M3 12H21" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-linecap="round"/>
<path d="M3 17H21" stroke=${
    color ?? '#98A2B3'
  } stroke-width="1.5" stroke-linecap="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const homeActiveIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0427 3.15016L10.0431 3.14985C11.1274 2.27904 12.8676 2.28414 13.968 3.16073C13.9682 3.16084 13.9683 3.16094 13.9684 3.16105L20.5141 8.39756C20.5147 8.39802 20.5152 8.39849 20.5158 8.39895C20.893 8.70711 21.2197 9.18942 21.4305 9.74099C21.6411 10.2922 21.7196 10.8699 21.6463 11.351L20.3874 18.8845C20.3873 18.885 20.3872 18.8855 20.3871 18.8859C20.1375 20.3188 18.7433 21.5 17.3 21.5H6.70002C5.23555 21.5 3.87256 20.3476 3.623 18.8965C3.62294 18.8961 3.62288 18.8958 3.62282 18.8955L2.36319 11.3576L2.36299 11.3565C2.28085 10.8718 2.35458 10.293 2.56471 9.74192C2.77482 9.19094 3.10555 8.70909 3.49187 8.40086L3.49273 8.40016L10.0427 3.15016ZM12 19.25C12.6862 19.25 13.25 18.6862 13.25 18V15C13.25 14.3139 12.6862 13.75 12 13.75C11.3139 13.75 10.75 14.3139 10.75 15V18C10.75 18.6862 11.3139 19.25 12 19.25Z" fill="#2D31A6" stroke="#2D31A6"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const listActiveIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.7324 9.82023L21.7044 9.35H21.4219L21.9985 8.29132L22.8246 19.6562L22.8248 19.6586C22.9021 20.6553 22.1148 21.5 21.1133 21.5H14.8388C15.0792 21.2067 15.2606 20.8596 15.3627 20.4735L19.3709 13.1152L17.8933 20.4006L17.7717 21H18.3833H21.1133C21.5796 21 21.8755 20.7614 22.017 20.6022L22.0196 20.5993C22.1305 20.4725 22.3548 20.1658 22.3222 19.7072L21.7324 9.82023Z" fill="#2D31A6" stroke="#2D31A6"/>
<path d="M11.7833 2.2399C11.8833 1.8399 11.6333 1.4299 11.2333 1.3299C10.8333 1.2399 10.4233 1.4799 10.3233 1.8799L9.8233 3.9499H11.3633L11.7833 2.2399Z" fill="#2D31A6"/>
<path d="M18.3833 2.21005C18.4733 1.80005 18.2133 1.41005 17.8033 1.32005C17.4033 1.23005 17.0033 1.49005 16.9133 1.90005L16.4633 3.97005H18.0033L18.3833 2.21005Z" fill="#2D31A6"/>
<path d="M22.1533 5.32994C21.8233 4.52994 21.0433 3.95994 20.0833 3.95994H18.0033L17.4433 6.54994C17.3633 6.89994 17.0533 7.13994 16.7133 7.13994C16.6633 7.13994 16.6033 7.13994 16.5533 7.11994C16.1533 7.02994 15.8933 6.62994 15.9733 6.22994L16.4633 3.94994H11.3633L10.7333 6.54994C10.6533 6.88994 10.3433 7.11994 10.0033 7.11994C9.94331 7.11994 9.88331 7.10994 9.82331 7.09994C9.42331 6.99994 9.17331 6.59994 9.27331 6.18994L9.81331 3.93994H7.78331C6.80331 3.93994 5.93331 4.57994 5.64331 5.51994L1.43331 19.0699C0.993312 20.5199 2.06331 21.9999 3.57331 21.9999H16.7133C17.7533 21.9999 18.6533 21.2999 18.8933 20.2899L22.2633 6.75994C22.3233 6.50994 22.3433 6.25994 22.3233 6.01994C22.3033 5.77994 22.2533 5.53994 22.1533 5.32994ZM15.0333 16.7499H7.03331C6.62331 16.7499 6.28331 16.4099 6.28331 15.9999C6.28331 15.5899 6.62331 15.2499 7.03331 15.2499H15.0333C15.4433 15.2499 15.7833 15.5899 15.7833 15.9999C15.7833 16.4099 15.4433 16.7499 15.0333 16.7499ZM16.0333 12.7499H8.03331C7.62331 12.7499 7.28331 12.4099 7.28331 11.9999C7.28331 11.5899 7.62331 11.2499 8.03331 11.2499H16.0333C16.4433 11.2499 16.7833 11.5899 16.7833 11.9999C16.7833 12.4099 16.4433 12.7499 16.0333 12.7499Z" fill="#2D31A6"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const newsActiveIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.04584 17.613C7.18896 18.4034 7.3506 19.1933 7.5456 19.9764C6.40045 19.2419 5.4232 18.2615 4.68477 17.1134C5.46775 17.3098 6.25896 17.4738 7.04584 17.613Z" fill="#2D31A6" stroke="#2D31A6"/>
<path d="M18.3001 17.6129C19.0917 17.4734 19.8772 17.3091 20.6563 17.1124C19.9151 18.2661 18.9255 19.2501 17.7665 19.9946C17.9759 19.2068 18.1577 18.4127 18.3001 17.6129Z" fill="#2D31A6" stroke="#2D31A6"/>
<path d="M21.6867 7.70998C20.4267 7.32998 19.1567 7.01998 17.8667 6.79998C17.6567 5.50998 17.3467 4.22998 16.9567 2.97998C19.0267 3.96998 20.6967 5.63998 21.6867 7.70998Z" fill="#2D31A6"/>
<path d="M8.31661 3.09006C7.95661 4.31006 7.69661 5.55006 7.48661 6.81006C6.19661 7.01006 4.91661 7.33006 3.64661 7.71006C4.61661 5.70006 6.22661 4.05006 8.21661 3.06006C8.24661 3.06006 8.28661 3.09006 8.31661 3.09006Z" fill="#2D31A6"/>
<path d="M16.1566 6.59C13.8366 6.33 11.4966 6.33 9.17664 6.59C9.42664 5.22 9.74664 3.85 10.1966 2.53C10.2166 2.45 10.2066 2.39 10.2166 2.31C11.0066 2.12 11.8166 2 12.6666 2C13.5066 2 14.3266 2.12 15.1066 2.31C15.1166 2.39 15.1166 2.45 15.1366 2.53C15.5866 3.86 15.9066 5.22 16.1566 6.59Z" fill="#2D31A6"/>
<path d="M7.25663 15.4898C5.87663 15.2398 4.51663 14.9198 3.19663 14.4698C3.11663 14.4498 3.05663 14.4598 2.97663 14.4498C2.78663 13.6598 2.66663 12.8498 2.66663 11.9998C2.66663 11.1598 2.78663 10.3398 2.97663 9.55977C3.05663 9.54977 3.11663 9.54977 3.19663 9.52977C4.52663 9.08977 5.87663 8.75977 7.25663 8.50977C7.00663 10.8298 7.00663 13.1698 7.25663 15.4898Z" fill="#2D31A6"/>
<path d="M22.6667 11.9998C22.6667 12.8498 22.5467 13.6598 22.3567 14.4498C22.2767 14.4598 22.2167 14.4498 22.1367 14.4698C20.8067 14.9098 19.4467 15.2398 18.0767 15.4898C18.3367 13.1698 18.3367 10.8298 18.0767 8.50977C19.4467 8.75977 20.8167 9.07977 22.1367 9.52977C22.2167 9.54977 22.2767 9.55977 22.3567 9.55977C22.5467 10.3498 22.6667 11.1598 22.6667 11.9998Z" fill="#2D31A6"/>
<path d="M16.1566 17.4102C15.9066 18.7902 15.5866 20.1502 15.1366 21.4702C15.1166 21.5502 15.1166 21.6102 15.1066 21.6902C14.3266 21.8802 13.5066 22.0002 12.6666 22.0002C11.8166 22.0002 11.0066 21.8802 10.2166 21.6902C10.2066 21.6102 10.2166 21.5502 10.1966 21.4702C9.75664 20.1402 9.42664 18.7902 9.17664 17.4102C10.3366 17.5402 11.4966 17.6302 12.6666 17.6302C13.8366 17.6302 15.0066 17.5402 16.1566 17.4102Z" fill="#2D31A6"/>
<path d="M16.43 15.7633C13.9289 16.0789 11.4044 16.0789 8.9033 15.7633C8.58774 13.2622 8.58774 10.7378 8.9033 8.23667C11.4044 7.92111 13.9289 7.92111 16.43 8.23667C16.7455 10.7378 16.7455 13.2622 16.43 15.7633Z" fill="#2D31A6"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const userActiveIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.75 6.75C7.75 4.40614 9.65614 2.5 12 2.5C14.3435 2.5 16.2495 4.40562 16.25 6.74903C16.2405 9.04858 14.4468 10.9052 12.161 10.99H12.161H12.1609H12.1609H12.1609H12.1609H12.1608H12.1608H12.1608H12.1607H12.1607H12.1607H12.1606H12.1606H12.1606H12.1606H12.1605H12.1605H12.1605H12.1604H12.1604H12.1604H12.1604H12.1603H12.1603H12.1603H12.1602H12.1602H12.1602H12.1601H12.1601H12.1601H12.1601H12.16H12.16H12.16H12.1599H12.1599H12.1599H12.1599H12.1598H12.1598H12.1598H12.1597H12.1597H12.1597H12.1596H12.1596H12.1596H12.1596H12.1595H12.1595H12.1595H12.1594H12.1594H12.1594H12.1594H12.1593H12.1593H12.1593H12.1592H12.1592H12.1592H12.1591H12.1591H12.1591H12.1591H12.159H12.159H12.159H12.1589H12.1589H12.1589H12.1588H12.1588H12.1588H12.1588H12.1587H12.1587H12.1587H12.1586H12.1586H12.1586H12.1585H12.1585H12.1585H12.1585H12.1584H12.1584H12.1584H12.1583H12.1583H12.1583H12.1582H12.1582H12.1582H12.1581H12.1581H12.1581H12.1581H12.158H12.158H12.158H12.1579H12.1579H12.1579H12.1578H12.1578H12.1578H12.1577H12.1577H12.1577H12.1576H12.1576H12.1576H12.1575H12.1575H12.1575H12.1575H12.1574H12.1574H12.1574H12.1573H12.1573H12.1573H12.1572H12.1572H12.1572H12.1571H12.1571H12.1571H12.157H12.157H12.157H12.1569H12.1569H12.1569H12.1568H12.1568H12.1568H12.1567H12.1567H12.1566H12.1566H12.1566H12.1565H12.1565H12.1565H12.1564H12.1564H12.1564H12.1563H12.1563H12.1563H12.1562H12.1562H12.1562H12.1561H12.1561H12.156H12.156H12.156H12.1559H12.1559H12.1559H12.1558H12.1558H12.1558H12.1557H12.1557H12.1556H12.1556H12.1556H12.1555H12.1555H12.1555H12.1554H12.1554H12.1553H12.1553H12.1553H12.1552H12.1552H12.1551H12.1551H12.1551H12.155H12.155H12.1549H12.1549H12.1549H12.1548H12.1548H12.1547H12.1547H12.1547H12.1546H12.1546H12.1545H12.1545H12.1545H12.1544H12.1544H12.1543H12.1543H12.1542H12.1542H12.1542H12.1541H12.1541H12.154H12.154H12.1539H12.1539H12.1539H12.1538H12.1538H12.1537H12.1537H12.1536H12.1536H12.1535H12.1535H12.1535H12.1534H12.1534H12.1533H12.1533H12.1532H12.1532H12.1531H12.1531H12.153H12.153H12.1529H12.1529H12.1529H12.1528H12.1528H12.1527H12.1527H12.1526H12.1526H12.1525H12.1525H12.1524H12.1524H12.1523H12.1523H12.1522H12.1522H12.1521H12.1521H12.152H12.152H12.1519H12.1519H12.1518H12.1518H12.1517H12.1517H12.1516H12.1516H12.1515H12.1514H12.1514H12.1513H12.1513H12.1512H12.1512H12.1511H12.1511H12.151H12.151H12.1509H12.1509H12.1508H12.1507H12.1507H12.1506H12.1506H12.1505H12.1505H12.1504H12.1503H12.1503H12.1502H12.1502H12.1501H12.1501H12.15H12.1499H12.1498H12.1496H12.1495H12.1494H12.1493H12.1492H12.1491H12.149H12.1488H12.1487H12.1486H12.1485H12.1484H12.1483H12.1482H12.148H12.1479H12.1478H12.1477H12.1476H12.1475H12.1474H12.1473H12.1471H12.147H12.1469H12.1468H12.1467H12.1466H12.1465H12.1464H12.1463H12.1461H12.146H12.1459H12.1458H12.1457H12.1456H12.1455H12.1454H12.1453H12.1452H12.1451H12.1449H12.1448H12.1447H12.1446H12.1445H12.1444H12.1443H12.1442H12.1441H12.144H12.1439H12.1438H12.1437H12.1436H12.1435H12.1433H12.1432H12.1431H12.143H12.1429H12.1428H12.1427H12.1426H12.1425H12.1424H12.1423H12.1422H12.1421H12.142H12.1419H12.1418H12.1417H12.1416H12.1415H12.1414H12.1413H12.1412H12.1411H12.141H12.1409H12.1408H12.1407H12.1406H12.1405H12.1404H12.1403H12.1402H12.1401H12.14H12.1399H12.1398H12.1397H12.1396H12.1395H12.1394H12.1393H12.1392H12.1391H12.139H12.1389H12.1388H12.1387H12.1386H12.1385H12.1384H12.1383H12.1382H12.1381H12.138H12.1379H12.1378H12.1377H12.1376H12.1375H12.1374H12.1373H12.1372H12.1371H12.137H12.1369H12.1368H12.1368H12.1367H12.1366H12.1365H12.1364H12.1363H12.1362H12.1361H12.136H12.1359H12.1358H12.1357H12.1356H12.1355H12.1354H12.1353H12.1352H12.1351H12.1351H12.135H12.1349H12.1348H12.1347H12.1346H12.1345H12.1344H12.1343H12.1342H12.1341H12.134H12.1339H12.1338H12.1338C12.0433 10.9796 11.9492 10.9808 11.8625 10.989C9.52538 10.8911 7.75 9.03575 7.75 6.75Z" fill="#2D31A6" stroke="#2D31A6"/>
<path d="M7.19868 20.1748L7.19731 20.1739C6.03836 19.4012 5.45996 18.4016 5.45996 17.3799C5.45996 16.3578 6.03872 15.3484 7.207 14.5661C8.51356 13.7017 10.2518 13.2549 12.0125 13.2549C13.7738 13.2549 15.5067 13.702 16.8026 14.5659C17.958 15.3362 18.5309 16.3355 18.54 17.3619C18.5392 18.3934 17.9603 19.3927 16.8008 20.1751C15.5 21.0483 13.7627 21.4999 12 21.4999C10.237 21.4999 8.49957 21.0482 7.19868 20.1748Z" fill="#2D31A6" stroke="#2D31A6"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const homeIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18V15" stroke="${
    color ?? '#8098F9'
  }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.07 2.82009L3.14002 8.37009C2.36002 8.99009 1.86002 10.3001 2.03002 11.2801L3.36002 19.2401C3.60002 20.6601 4.96002 21.8101 6.40002 21.8101H17.6C19.03 21.8101 20.4 20.6501 20.64 19.2401L21.97 11.2801C22.13 10.3001 21.63 8.99009 20.86 8.37009L13.93 2.83009C12.86 1.97009 11.13 1.97009 10.07 2.82009Z" stroke="${
    color ?? '#8098F9'
  }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const listIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2633 6.76001L18.8933 20.29C18.6533 21.3 17.7533 22 16.7133 22H3.57326C2.06326 22 0.983275 20.5199 1.43328 19.0699L5.64327 5.55005C5.93327 4.61005 6.80328 3.95996 7.78328 3.95996H20.0833C21.0333 3.95996 21.8233 4.53997 22.1533 5.33997C22.3433 5.76997 22.3833 6.26001 22.2633 6.76001Z" stroke="${
    color ?? '#8098F9'
  }" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M16.3333 22H21.1133C22.4033 22 23.4133 20.91 23.3233 19.62L22.3333 6" stroke="${
    color ?? '#8098F9'
  }" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0133 6.38L11.0533 2.06006" stroke="${
    color ?? '#8098F9'
  }" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.7133 6.39001L17.6533 2.05005" stroke="${
    color ?? '#8098F9'
  }" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.03333 12H16.0333" stroke="${
    color ?? '#8098F9'
  }" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.03333 16H15.0333" stroke="${
    color ?? '#8098F9'
  }" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const newsIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 22C18.1895 22 22.6667 17.5228 22.6667 12C22.6667 6.47715 18.1895 2 12.6667 2C7.14384 2 2.66669 6.47715 2.66669 12C2.66669 17.5228 7.14384 22 12.6667 22Z" stroke="${
    color ?? '#8098F9'
  }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.66666 3H9.66666C7.71666 8.84 7.71666 15.16 9.66666 21H8.66666" stroke="${
    color ?? '#8098F9'
  }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.6667 3C17.6167 8.84 17.6167 15.16 15.6667 21" stroke="${
    color ?? '#8098F9'
  }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.66669 16V15C9.50669 16.95 15.8267 16.95 21.6667 15V16" stroke="${
    color ?? '#8098F9'
  }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.66669 9.0001C9.50669 7.0501 15.8267 7.0501 21.6667 9.0001" stroke="${
    color ?? '#8098F9'
  }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const userIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z" stroke="${
    color ?? '#8098F9'
  }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke="${
    color ?? '#8098F9'
  }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};
