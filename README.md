# 🔐 Express.js Authentication API

یک پروژه امن و کامل برای سیستم احراز هویت (ثبت‌نام و ورود) با Express.js و MongoDB

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18+-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0+-green.svg)](https://mongodb.com)

## ✨ ویژگی‌ها

- ✅ **ثبت‌نام و ورود امن کاربران**
- 🔐 **هش کردن رمز عبور با bcryptjs**
- 🛡️ **احراز هویت با JWT**
- 📧 **اعتبارسنجی ایمیل و رمز عبور**
- 🚀 **محدودیت نرخ درخواست (Rate Limiting)**
- 🔒 **امنیت هدرها با Helmet**
- 🛟 **مدیریت خطاهای متمرکز**
- 📝 **اعتبارسنجی کامل ورودی‌ها**
- 🌐 **پشتیبانی از CORS**

## 🚀 شروع سریع

### پیش‌نیازها

- Node.js 18 یا بالاتر
- MongoDB 4.4 یا بالاتر
- npm یا yarn

### نصب و راه‌اندازی

1. **کلون کردن ریپازیتوری**
```bash
git clone https://github.com/your-username/express-auth-api.git
cd express-auth-api
```

2. **نصب وابستگی‌ها**
```bash
npm install
```

3. **تنظیم فایل محیطی**
```bash
cp .env.example .env
```
ویرایش فایل `.env` با مقادیر مناسب:
```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/auth_demo
JWT_SECRET=your_super_secure_jwt_secret_key_here
JWT_EXPIRES_IN=7d
ALLOWED_ORIGINS=http://localhost:3000
```

4. **اجرای پروژه**
```bash
# توسعه
npm run dev

# تولید
npm start
```

## 📚 API Endpoints

### احراز هویت

| متد | مسیر | توضیحات |
|-----|------|---------|
| `POST` | `/api/auth/register` | ثبت‌نام کاربر جدید |
| `POST` | `/api/auth/login` | ورود کاربر |
| `GET` | `/api/auth/me` | دریافت اطلاعات کاربر جاری |

### مثال‌های درخواست

**ثبت‌نام:**
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "کاربر تست",
    "email": "test@example.com",
    "password": "SecurePass123"
  }'
```

**ورود:**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "SecurePass123"
  }'
```

**دریافت اطلاعات کاربر:**
```bash
curl -X GET http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🛡️ اصول امنیتی پیاده‌سازی شده

- **هش کردن رمز عبور** با الگوریتم bcrypt
- **توکن‌های JWT با تاریخ انقضا**
- **اعتبارسنجی و سانی‌تیزیشن ورودی‌ها**
- **محدودیت نرخ درخواست برای جلوگیری از حملات Brute Force**
- **امنیت هدرها با Helmet**
- **پیکربندی امن CORS**
- **مدیریت خطا بدون افشای اطلاعات حساس**
- **ذخیره‌سازی امن متغیرهای محیطی**

## 🏗️ ساختار پروژه

```
express-auth-api/
├── config/           # پیکربندی‌ها
├── middleware/       # میدلورهای امنیتی و اعتبارسنجی
├── models/          # مدل‌های دیتابیس
├── routes/          # routeهای API
├── .env            # متغیرهای محیطی
├── app.js          # فایل اصلی
└── package.json    # وابستگی‌ها
```

## 🤝 مشارکت

1. Fork کردن پروژه
2. ایجاد Branch جدید (`git checkout -b feature/AmazingFeature`)
3. Commit تغییرات (`git commit -m 'Add some AmazingFeature'`)
4. Push به Branch (`git push origin feature/AmazingFeature`)
5. باز کردن Pull Request

## 📝 مجوز

این پروژه تحت مجوز MIT منتشر شده است. برای اطلاعات بیشتر فایل [LICENSE](LICENSE) را مطالعه کنید.

## 👥 توسعه‌دهندگان

- **AmirHMOhammadi** - توسعه‌دهنده اصلی - [AmirHMohammadi](https://github.com/AmirHMohammadi1)

---

**توجه**: این پروژه برای اهداف آموزشی و تولیدی توسعه داده شده است. حتماً متغیرهای محیطی را در محیط تولید به درستی تنظیم کنید.

---

<div align="center">

**⭐ اگر این پروژه برای شما مفید بود، لطفاً ستاره بدید!**

</div>


---

**ساخته شده با ❤️ و Express.js**
