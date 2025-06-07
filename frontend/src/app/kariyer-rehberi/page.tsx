
import BlogSection from "@/components/kariyer-rehberi/BlogSection"
import { Blog } from "@/models/Blogs"


export default async function KariyerRehberi() {
  const BlogsData = await fetch('http://localhost:3000/api/career-guides?category=blog&limit=12')
  const blogs: Blog[] = await BlogsData.json()
  const ExtrasData = await fetch('http://localhost:3000/api/career-guides?category=extra&limit=12')
  const extras:Blog[] = await ExtrasData.json()
  const EducationsData = await fetch('http://localhost:3000/api/career-guides?category=education&limit=12')
  const educations:Blog[] = await EducationsData.json()



  return (
    <div className="page-content mx-auto  py-8">
      <h1 className="text-3xl font-bold text-center mb-8 px-4">Kariyer Rehberi</h1>

      {/* Masaüstü görünüm için dikey sıralama */}
      <div className="block space-y-16">
        <section>
          <SectionTitle  title="Blog Yazıları" />
          
          <BlogSection blogs={blogs} slug={"bloglar"} />
        </section>

        <section>
          <SectionTitle title="Eğitimler" />
          <BlogSection blogs={educations} slug={"egitimler"} />
        </section>

        <section>
          <SectionTitle title="Ekstralar" />
          <BlogSection blogs={extras} slug={"ekstralar"} />
        </section>
      </div>
    </div>
  )
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between mb-6 px-4">
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  )
}

