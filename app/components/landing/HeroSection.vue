<template>
  <section class="relative min-h-screen overflow-hidden bg-[#020202] text-white">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_58%_45%,rgba(255,255,255,0.08),transparent_27%),linear-gradient(90deg,#020202_0%,#030303_35%,#050505_67%,#020202_100%)]"></div>

    <div class="absolute inset-y-0 left-[39%] hidden w-[31%] md:block">
      <img
        src="/images/brand/threshold-hero.png"
        alt="A lone figure standing at a threshold of light"
        class="h-full w-full object-cover object-center opacity-72 grayscale contrast-125"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-[#020202] via-transparent to-[#020202]"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-[#020202]/75"></div>
    </div>

    <div class="absolute inset-0 opacity-[0.055] noise-overlay pointer-events-none"></div>
    <div class="absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.95)]"></div>

    <div class="relative z-10 mx-auto flex min-h-screen max-w-[1180px] items-center px-5 pb-14 pt-24 md:px-8 md:pt-28">
      <div class="grid w-full items-center gap-8 lg:grid-cols-[0.92fr_0.36fr_0.54fr]">
        <div class="max-w-[620px] pt-8 md:pt-0">
          <h1 class="font-display uppercase leading-[0.82] tracking-[0.02em] text-[#d9d1c7] text-shadow-brutal text-[clamp(5.4rem,14vw,12rem)] lg:text-[clamp(6.5rem,10vw,11.5rem)]">
            <span class="block">Hard</span>
            <span class="block">is</span>
            <span class="block">Misunderstood.</span>
          </h1>

          <p class="mt-7 max-w-[470px] font-body text-base leading-relaxed text-[#e2ded8]/82 md:text-lg">
            A bodyweight practice for expanding threshold through sustained intensity and continuity.
          </p>

          <div class="mt-7 flex flex-col items-start gap-3">
            <button
              @click="$emit('openWaitlist')"
              class="border border-white/20 bg-[#f0e8df] px-10 py-4 font-mono text-[12px] font-extrabold uppercase tracking-[0.13em] text-black transition-all duration-300 hover:bg-white hover:shadow-[0_0_36px_rgba(255,255,255,0.18)]"
            >
              Begin Free
            </button>
            <p class="font-mono text-[11px] tracking-[0.06em] text-white/38">
              First 2 sessions included.
            </p>
          </div>
        </div>

        <div class="hidden h-[58vh] min-h-[460px] md:block"></div>

        <div id="app" class="relative flex justify-center lg:justify-end">
          <div class="absolute -inset-14 rounded-full bg-white/[0.04] blur-[70px]"></div>
          <div class="phone-shell relative h-[600px] w-[292px] rounded-[3rem] border border-white/22 bg-[#090909] p-3 shadow-[0_38px_120px_rgba(0,0,0,0.9)] md:h-[640px] md:w-[312px]">
            <div class="absolute right-[-4px] top-28 h-20 w-[4px] rounded-r bg-white/18"></div>
            <div class="absolute left-[-3px] top-32 h-12 w-[3px] rounded-l bg-white/15"></div>
            <div class="h-full overflow-hidden rounded-[2.35rem] border border-white/10 bg-[linear-gradient(180deg,#171717_0%,#090909_47%,#030303_100%)]">
              <div class="relative h-full px-7 pb-7 pt-12">
                <div class="absolute left-1/2 top-0 h-7 w-32 -translate-x-1/2 rounded-b-3xl bg-black"></div>
                <div class="absolute inset-0 opacity-[0.045] noise-overlay"></div>
                <div class="relative flex h-full flex-col">
                  <div class="flex items-center justify-center font-mono text-[11px] uppercase tracking-[0.42em] text-white/82">
                    GRHIIT
                  </div>

                  <div class="mt-12 text-center font-mono text-[10px] uppercase tracking-[0.24em] text-white/48">
                    Cycle 1
                  </div>
                  <div class="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">
                    Week 2 · Session 3
                  </div>

                  <div class="mt-7 text-center font-display text-[4.4rem] uppercase leading-none tracking-[0.03em] text-[#d9d1c7]">
                    Exposure
                  </div>

                  <div class="mt-8 text-center font-mono text-2xl text-white/86">
                    20:43
                  </div>
                  <div class="mt-1 text-center font-mono text-[9px] uppercase tracking-[0.24em] text-white/34">
                    Remaining Time
                  </div>

                  <button class="mx-auto mt-7 w-36 border border-white/12 bg-white/[0.08] py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/78">
                    View Session
                  </button>

                  <div class="mt-auto">
                    <div class="font-mono text-[9px] uppercase tracking-[0.2em] text-white/36">Week Progress</div>
                    <div class="mt-4 grid grid-cols-6 gap-3">
                      <div
                        v-for="n in 6"
                        :key="n"
                        class="flex h-7 w-7 items-center justify-center rounded-full border text-[10px]"
                        :class="n <= 3 ? 'border-[#d9d1c7]/55 bg-[#d9d1c7]/12 text-[#d9d1c7]' : 'border-white/12 text-white/20'"
                      >
                        <span v-if="n <= 3">✓</span>
                      </div>
                    </div>

                    <div class="mt-8 grid grid-cols-4 gap-3 border-t border-white/8 pt-5 text-center font-mono text-[8px] uppercase tracking-[0.06em] text-white/28">
                      <div class="text-grhiit-red/70">Train</div>
                      <div>Explore</div>
                      <div>Reflect</div>
                      <div>Profile</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'openWaitlist'): void
}>()
</script>

<style scoped>
.phone-shell::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 3rem;
  pointer-events: none;
  background: linear-gradient(135deg, rgba(255,255,255,0.22), transparent 28%, transparent 72%, rgba(255,255,255,0.11));
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  padding: 1px;
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
</style>
