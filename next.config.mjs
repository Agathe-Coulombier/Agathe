import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  // When multiple lockfiles exist in parent directories, Next may infer the
  // wrong workspace root which can cause permission/trace issues on Windows.
  // Explicitly set the output tracing root to this project directory.
  outputFileTracingRoot: path.resolve('./')
};

export default withNextIntl(nextConfig);
