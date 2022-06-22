import { CheckCircle, Lock } from "phosphor-react";
import {format, isPast} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const isLessonAvaliable = isPast(props.availableAt);
    const lessonAvailableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm",{
        locale: ptBR
    })

    return (
        <a href="#">
            <span className="text-gray-300">
                {lessonAvailableDateFormatted}
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
                        {props.type === 'live' ? 'Ao Vivo' : 'Aula Prática'}
                    </span>
                </header>

                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </a>
    )
}