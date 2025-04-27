type NumberChar = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

type GiftCode = `${NumberChar}${NumberChar}${NumberChar}`

export class Person {
  constructor(
    public readonly id: GiftCode,
    private readonly name: string,
    private readonly isTeacher: boolean,
    public readonly gifts: string[],
  ) {}

  get fullName() {
    return `${this.isTeacher ? "استاد" : "آقای"} ${this.name} عزیز`
  }
}

export const people: Person[] = [
  new Person("433", "قاسمی", true, [
    "http://ketabrah.ir/gift/muokhbzffe1",
    "http://ketabrah.ir/gift/qbs22xzd5he",
  ]),
  new Person("268", "قاسمی", true, [
    "http://ketabrah.ir/gift/sl4buzdxdqb",
    "http://ketabrah.ir/gift/nfu1mgy2awo",
  ]),
  new Person("142", "قاسمی", true, [
    "http://ketabrah.ir/gift/d3imn4ipvcv",
    "http://ketabrah.ir/gift/l5j5sakau3r",
  ]),
  new Person("721", "منصوری", true, [
    "http://ketabrah.ir/gift/khr5gtq5ish",
    "http://ketabrah.ir/gift/t3f4ubenkiz",
  ]),
  new Person("835", "اصغری", true, [
    "http://ketabrah.ir/gift/crtnu1trun2",
    "http://ketabrah.ir/gift/db3xuuewl2r",
  ]),
  new Person("444", "بهبهانی", true, [
    "http://ketabrah.ir/gift/pbyv5liyxnq",
    "http://ketabrah.ir/gift/o1zs4zt3xqw",
  ]),
  new Person("356", "جوزی", true, [
    "http://ketabrah.ir/gift/urqf3wpxkzz",
    "http://ketabrah.ir/gift/bw3gfr53rvc",
  ]),
  new Person("150", "خانعلی", true, [
    "http://ketabrah.ir/gift/0ot3chfcouo",
    "http://ketabrah.ir/gift/pjqoccmp143",
  ]),
  new Person("261", "رضائی", true, [
    "http://ketabrah.ir/gift/4uig4gkssfy",
    "http://ketabrah.ir/gift/ulj0cab5apo",
  ]),
  new Person("372", "سینایی", true, [
    "http://ketabrah.ir/gift/udctp4xgltu",
    "http://ketabrah.ir/gift/illt0sezwjt",
  ]),
  new Person("369", "نقاش", true, [
    "http://ketabrah.ir/gift/dae4pl2xyy3",
    "http://ketabrah.ir/gift/5n22xckxvsl",
  ]),
  new Person("624", "صادقی", true, [
    "http://ketabrah.ir/gift/yvl52kp3aku",
    "http://ketabrah.ir/gift/xbgzz3jnoxc",
  ]),
  new Person("773", "صمدی", true, [
    "http://ketabrah.ir/gift/arqmlb54enw",
    "http://ketabrah.ir/gift/y2ya4kj04lw",
  ]),
  new Person("964", "فخاران", true, [
    "http://ketabrah.ir/gift/0bn1q0cb1kz",
    "http://ketabrah.ir/gift/jadx13dgddf",
  ]),
  new Person("049", "فرهادی", true, [
    "http://ketabrah.ir/gift/55ukp51h32d",
    "http://ketabrah.ir/gift/dg0lsdh3nnt",
  ]),
  new Person("692", "مقیمی", true, [
    "http://ketabrah.ir/gift/llmp5ofzt1w",
    "http://ketabrah.ir/gift/l3f1iibbvvd",
  ]),
  new Person("577", "دهنه‌ای", true, [
    "http://ketabrah.ir/gift/mzji5jidvt3",
    "http://ketabrah.ir/gift/uekq254qnbh",
  ]),
  new Person("419", "مقتصدی", true, [
    "http://ketabrah.ir/gift/cfw403vawpk",
    "http://ketabrah.ir/gift/a1pm3r5h0xn",
  ]),
  new Person("337", "مظفری", false, [
    "http://ketabrah.ir/gift/rejvj3u4vik",
    "http://ketabrah.ir/gift/yg45i0xzeqm",
  ]),
  new Person("428", "مسیبی", false, ["http://ketabrah.ir/gift/jhvrnah0f14", ""]),
  new Person("388", "تقوایی", true, ["/secrets.pdf", "/mindset.pdf"]),
  new Person("255", "میرزاخانلو", true, ["/secrets.pdf", "/mindset.pdf"]),
  new Person("486", "بهزادیان", true, ["/secrets.pdf", "/mindset.pdf"]),
]

// Mindsets:
// http://ketabrah.ir/gift/qbs22xzd5he
// http://ketabrah.ir/gift/nfu1mgy2awo
// http://ketabrah.ir/gift/l5j5sakau3r
// http://ketabrah.ir/gift/t3f4ubenkiz
// http://ketabrah.ir/gift/db3xuuewl2r
// http://ketabrah.ir/gift/o1zs4zt3xqw
// http://ketabrah.ir/gift/bw3gfr53rvc
// http://ketabrah.ir/gift/pjqoccmp143
// http://ketabrah.ir/gift/ulj0cab5apo
// http://ketabrah.ir/gift/illt0sezwjt
// http://ketabrah.ir/gift/5n22xckxvsl
// http://ketabrah.ir/gift/xbgzz3jnoxc
// http://ketabrah.ir/gift/y2ya4kj04lw
// http://ketabrah.ir/gift/jadx13dgddf
// http://ketabrah.ir/gift/dg0lsdh3nnt
// http://ketabrah.ir/gift/l3f1iibbvvd
// http://ketabrah.ir/gift/uekq254qnbh
// http://ketabrah.ir/gift/a1pm3r5h0xn
// http://ketabrah.ir/gift/yg45i0xzeqm
// TODO: PURCHASE!

// Secrets:
// http://ketabrah.ir/gift/muokhbzffe1
// http://ketabrah.ir/gift/sl4buzdxdqb
// http://ketabrah.ir/gift/d3imn4ipvcv
// http://ketabrah.ir/gift/khr5gtq5ish
// http://ketabrah.ir/gift/crtnu1trun2
// http://ketabrah.ir/gift/pbyv5liyxnq
// http://ketabrah.ir/gift/urqf3wpxkzz
// http://ketabrah.ir/gift/0ot3chfcouo
// http://ketabrah.ir/gift/4uig4gkssfy
// http://ketabrah.ir/gift/udctp4xgltu
// http://ketabrah.ir/gift/dae4pl2xyy3
// http://ketabrah.ir/gift/yvl52kp3aku
// http://ketabrah.ir/gift/arqmlb54enw
// http://ketabrah.ir/gift/0bn1q0cb1kz
// http://ketabrah.ir/gift/55ukp51h32d
// http://ketabrah.ir/gift/llmp5ofzt1w
// http://ketabrah.ir/gift/mzji5jidvt3
// http://ketabrah.ir/gift/cfw403vawpk
// http://ketabrah.ir/gift/rejvj3u4vik
// http://ketabrah.ir/gift/jhvrnah0f14
