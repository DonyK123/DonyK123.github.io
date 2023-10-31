import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".digitalhouse",
  `Trabalhei como instrutor conteudista em frontend na
  Digital House, o trabalho consistia em criar conteúdos para as
  aulas de especialização frontend. Alguns temas dos conteúdos
  realizados foram: React, Redux, TypeScript, Testes,
  GraphQL, Next.js, MUI, React Hook Form e styled-components.`,
  "Professor conteudista em Frontend",
  "Digital House",
  "Nov 2021 - Nov 2022 (1 Tahun)"
);

hoverChangeExperience(
  ".zuplae",
  `Di tahun 2013-2019 saya menjalani fase baru yaitu fase sekolah dasar dimana saya belajar menghitung,memperlancar baca abjad dan belajar tentang sopan santun di sekolah dasar menjadi tempat dimana saya mulai mengenal mata pelajaran yang sebenarnya seperti bahasa indonesia sampai PPKN `,
  "Public Elementary school",
  "Sdn Periuk Jaya Permai",
  "2013 - 2019 (6 Tahun)"
);

hoverChangeExperience(
  ".codigofontetv",
  `Pada tahun 2022-2025 saya memasuki fase baru yang di mana saya mengambil keputusan untuk masuk smk karna saya ingin menggali potensi saya dalam kejuruan dan untuk mengembangkan hobi saya dalam mengoding`,
  "Public Vocational high school",
  "Smkn 4 KOTA TANGERANG",
  "2022 - 2025 (3 tahun)"
);

hoverChangeExperience(
  ".contweb",
  `Pada tahun 2019-2022 saya masuk ke dalam fase baru yaitu sekolah mengenah pertama pada awal masuk sekolah di fase pertama saya merasa senang karna banyak teman-teman baru yang saya kenal mendapat banyak relasi dan tiba-tiba di tahun 2020 terjadi penyebaran virus yang mengakibatkan saya harus belajar di rumah.`,
  "Public Junior high school",
  "Smpn 12 KOTA TANGERANG",
  "2019 - 2022 (3 tahun)"
);
x