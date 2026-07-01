FROM node:lts-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME/bin:$PATH"
ENV NEXT_TELEMETRY_DISABLED=true
RUN corepack enable
COPY . /app
WORKDIR /app
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml ./


FROM base AS build
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build


FROM base AS runner
ENV NODE_ENV=production

COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

ENV PORT=12890
EXPOSE 12890

CMD [ "node", "server.js" ]