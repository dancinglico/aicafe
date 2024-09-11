import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Mail } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-brown-700">
        <button className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        <img src="/placeholder.svg?height=40&width=100" alt="AI Cafe Logo" className="h-10" />
        <button className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
      </header>
      <main className="flex-grow">
        <section className="relative h-64 overflow-hidden">
          <img
            src="/placeholder.svg?height=400&width=800"
            alt="Cafe Interior"
            className="object-cover w-full h-full"
          />
        </section>
        <section className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <img src="/placeholder.svg?height=200&width=400" alt="Google Pixel" className="w-full h-40 object-cover mb-4" />
              <h2 className="text-xl font-bold mb-2">Google Pixel 9 Series</h2>
              <p>無料提供開始！</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <img src="/placeholder.svg?height=200&width=400" alt="ChatGPT" className="w-full h-40 object-cover mb-4" />
              <h2 className="text-xl font-bold mb-2">ChatGPT 無料版で画像生成を解禁！</h2>
            </CardContent>
          </Card>
        </section>
        <section className="bg-pink-600 text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">日本トップクラスの講師が教える</h2>
          <p className="text-2xl mb-4">受講者満足度98.8%のChatGPT実践研修</p>
          <img src="/placeholder.svg?height=50&width=200" alt="Next AI Logo" className="mx-auto mb-4" />
        </section>
        <section className="grid grid-cols-2 gap-4 p-4">
          <Button className="bg-brown-700 text-white">Chat GPT活用研修の詳細</Button>
          <Button className="bg-brown-700 text-white">
            お問い合わせはこちらから
            <Mail className="ml-2" />
          </Button>
        </section>
        <section className="p-4">
          <h2 className="text-2xl font-bold mb-4">新着記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <img src="/placeholder.svg?height=150&width=300" alt={`Article ${i}`} className="w-full h-32 object-cover mb-2" />
                  <h3 className="font-bold">ChatGPTの使い方や活用法についての記事 {i}</h3>
                  <p className="text-sm text-gray-500">2024年9月2日</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 p-4 text-center">
        <p className="text-sm text-gray-600">© 2024 AI Cafe</p>
      </footer>
    </div>
  )
}