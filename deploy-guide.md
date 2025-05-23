# 🚀 Vercel 배포 가이드

## 방법 1: Git 연동 (추천)

1. **GitHub에 코드 푸시**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Vercel 가입 및 연동**
   - https://vercel.com 접속
   - "Sign up with GitHub" 클릭
   - "Import Git Repository" 선택
   - 방금 푸시한 레포지토리 선택
   - Deploy 클릭!

## 방법 2: Vercel CLI (더 빠름)

1. **Vercel CLI 설치**
   ```bash
   npm i -g vercel
   ```

2. **배포**
   ```bash
   vercel
   ```
   - 이메일 입력 후 인증
   - 프로젝트 설정은 모두 Enter (기본값 사용)
   - 완료!

## 🎉 배포 완료!

- 자동으로 HTTPS 적용
- 자동으로 도메인 생성 (your-project.vercel.app)
- Git push할 때마다 자동 배포
- 무료 플랜으로도 충분!

## 다른 무료 옵션들

### Netlify
```bash
# Netlify CLI 설치
npm i -g netlify-cli

# 배포
netlify deploy --prod
```

### Cloudflare Pages
- GitHub 연동 후 자동 배포
- 더 빠른 전 세계 CDN

### GitHub Pages (정적 사이트만)
```bash
# package.json에 추가
"scripts": {
  "export": "next build && next export"
}

# 빌드 후 gh-pages로 배포
npm run export
```

## 커스텀 도메인 연결

Vercel에서:
1. Project Settings → Domains
2. Add Domain
3. DNS 설정 (CNAME 또는 A 레코드)
4. 자동 SSL 인증서 발급!

가장 쉬운 방법은 **Vercel CLI**입니다. 5분이면 끝!