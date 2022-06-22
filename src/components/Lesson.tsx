import { CheckCircle, Lock } from "phosphor-react";

export function Lesson() {
    const isLessonAvaliable = false;

    return (
        <a href="#">
            <span className="text-gray-300">
                Segunda • 21 de junho • 19h00
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {isLessonAvaliable ? (
                        <span className="text-sm text-blue-500 font-medium flex gap-2">
                            <CheckCircle size={20} />
                            Conteúdo Disponivel
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex gap-2">
                            <Lock size={20} />
                            Em Breve
                        </span>
                    )}

                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                        Ao Vivo
                    </span>
                </header>

                <strong className="text-gray-200 mt-5 block">
                    Abertura do evento Ignite Lab
                </strong>
            </div>
        </a>
    )
}