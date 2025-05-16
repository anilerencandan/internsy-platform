import React from 'react'
import { Button } from '../ui/button'
import { MessageSquare, MoreHorizontal, Share2, ThumbsUp } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Avatar } from '../ui/avatar'

interface InterviewExperience {
    id: number
    position: string
    date: string
    experience: string
    difficulty: string
    offer: boolean
    content: string
    likes: number
    comments: number
    questions: {
        question: string
        answer: string
    }[]
}

export default function InterviewExperiencePost({experience}: { experience: InterviewExperience }) {
  return (
              <div className="">

              {/* Interview Item */}
              <div className=" border-b py-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">Senior Software Engineer Interview</h3>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">May 6, 2025</span>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-3">
                    <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                      <span className="text-gray-500">
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
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </span>
                    </div>
                  </Avatar>
                  <span className="font-medium">Anonymous Interview Candidate</span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                              <div className="flex flex-wrap gap-2 mb-4">
              <Badge
                variant={experience.experience === "Pozitif" ? "outline" : "secondary"}
                className={
                  experience.experience === "Pozitif"
                    ? "bg-green-50 text-green-600 border-green-100"
                    : experience.experience === "Nötr"
                      ? "bg-gray-50 text-gray-600"
                      : "bg-red-50 text-red-600 border-red-100"
                }
              >
                {experience.experience} deneyim
              </Badge>
              <Badge
                variant={
                  experience.difficulty === "Kolay"
                    ? "outline"
                    : experience.difficulty === "Orta"
                      ? "secondary"
                      : "destructive"
                }
                className={
                  experience.difficulty === "Kolay"
                    ? "bg-green-50 text-green-600 border-green-100"
                    : experience.difficulty === "Orta"
                      ? "bg-yellow-50 text-yellow-600 border-yellow-100"
                      : "bg-red-50 text-red-600 border-red-100"
                }
              >
                {experience.difficulty} Mülakat
              </Badge>
              <Badge
                variant={experience.offer ? "outline" : "destructive"}
                className={
                  experience.offer
                    ? "bg-green-50 text-green-600 border-green-100"
                    : "bg-red-50 text-red-600 border-red-100"
                }
              >
                {experience.offer ? "Teklif alındı" : "Teklif alınmadı"}
              </Badge>
            </div>

                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Mülakat Deneyimi</h4>
                  <p className="text-gray-700">
                    Microsoft biedt een strak en grondig proces, maar de lat ligt hoog. Niet ideaal als je jaren
                    praktijkervaring hebt maar niet dagelijks met leetcode-achtige problemen werkt. Alleen aan te raden
                    als je bereid bent maandenlang te oefenen.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Mülakat Soruları</h4>
                  <div className="flex flex-col gap-y-4">
                {experience.questions.map((q, index) => (
                                        <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <p className="font-medium mb-1">
                      Soru {index + 1}: {q.question}
                    </p>
                    <p className="text-gray-600 text-sm">Cevap: {q.answer}</p>
                  </div>

                    ))}
                  </div>
                </div>

            <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
              <Button variant="ghost" size="sm" className="text-gray-600">
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span>{experience.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>{experience.comments} Yorum</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600">
                <Share2 className="h-4 w-4 mr-1" />
                <span>Paylaş</span>
              </Button>
              {/* <Button variant="outline" size="sm" className="ml-auto">
                Yorum Yap
              </Button> */}
            </div>
              </div>
            </div>
  )
}
