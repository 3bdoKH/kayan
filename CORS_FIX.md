# حل مشكلة CORS في الإنتاج (cPanel)

## المشكلة
"Failed to fetch" يحدث عادة بسبب مشاكل CORS (Cross-Origin Resource Sharing) عندما يكون الواجهة الأمامية على نطاق مختلف عن API.

## الحلول

### الحل 1: إعداد CORS على الخادم (الأفضل)

يجب إضافة رؤوس CORS في API الخاص بك. إذا كنت تستخدم PHP في cPanel:

#### في ملف `.htaccess`:
```apache
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type, Authorization, Accept"
</IfModule>
```

#### أو في ملف PHP (في بداية ملف API):
```php
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, Accept");
header("Access-Control-Max-Age: 3600");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
?>
```

#### أو إذا كنت تستخدم Laravel:
في ملف `app/Http/Middleware/Cors.php`:
```php
public function handle($request, Closure $next)
{
    return $next($request)
        ->header('Access-Control-Allow-Origin', '*')
        ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
}
```

### الحل 2: استخدام Proxy في React (إذا لم تستطع تعديل API)

إذا كان API على نفس النطاق، استخدم مسار نسبي بدلاً من URL كامل:

```javascript
// بدلاً من
fetch('https://winchelmohandes-furniture.online/api/blog')

// استخدم
fetch('/api/blog')
```

### الحل 3: إعداد Proxy في package.json (للتطوير)

```json
{
  "name": "your-app",
  "version": "0.1.0",
  "proxy": "https://winchelmohandes-furniture.online",
  ...
}
```

### الحل 4: استخدام Proxy في cPanel

إذا كان React app و API على نفس النطاق، يمكنك إعداد rewrite rules في `.htaccess`:

```apache
RewriteEngine On
RewriteCond %{REQUEST_URI} ^/api/
RewriteRule ^api/(.*)$ https://winchelmohandes-furniture.online/api/$1 [P,L]
```

## التحقق من الحل

1. افتح Developer Tools (F12)
2. اذهب إلى Network tab
3. حاول تحميل الصفحة
4. تحقق من رؤوس الاستجابة (Response Headers)
5. يجب أن ترى `Access-Control-Allow-Origin: *`

## ملاحظات أمنية

- `Access-Control-Allow-Origin: *` يسمح لجميع النطاقات (غير آمن للإنتاج)
- للأمان، استخدم نطاقك المحدد:
  ```php
  header("Access-Control-Allow-Origin: https://yourdomain.com");
  ```

