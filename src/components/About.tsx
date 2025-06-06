import { type RefObject } from "react";
import licenses from "virtual:licenses";
import { X } from "lucide-react";
import type { ILicense } from "generate-license-file";

function License({ license }: { license: ILicense }) {
    return (
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
                {license.dependencies.join(", ")}
            </div>
            <div className="collapse-content text-sm overflow-x-auto">
                <pre className="whitespace-pre">
                    <code>
                        {license.content}
                    </code>
                </pre>
                {license.notices}
            </div>
        </div>
    )
}

export function AboutModal({ ref }: { ref: RefObject<HTMLDialogElement | null> }) {
    return (
        <dialog ref={ref} className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        <X />
                    </button>
                </form>
                <h2 className="font-bold text-2xl">About</h2>
                <h3 className="font-bold text-lg">STV Wertungstabellen</h3>
                <span className="py-4">
                    <a target="_blank" href="https://www.stv-fsg.ch/fileadmin/user_upload/stvfsgch/Sportarten/Leichtathletik/Wettkaempfe/Wertungstabelle_Aktive_2020.pdf"
                        className="link">
                        Wertungstabelle Leichtathletik 2020 Vereinswettkampf Aktive
                    </a>
                    <p className="italic">
                        zuletzt aktualisiert: 26.05.2025
                    </p>
                    <a target="_blank" href="https://www.stv-fsg.ch/fileadmin/user_upload/stvfsgch/Sportarten/Nationalturnen/Wertungstabelle_Nationalturnen_Aktive_2020_df_28102024.pdf"
                        className="link">
                        Wertungstabelle Nationalturnen 2018 - Anpassung 2020 Vereinswettkampf
                    </a>
                    <p className="italic">
                        zuletzt aktualisiert: 26.05.2025
                    </p>
                </span>
                <h3 className="font-bold text-lg">Libraries & Lizenzen</h3>
                <div className="space-y-1">
                    {licenses.map(license =>
                        <License key={license} license={license} />
                    )}
                </div>
            </div>
        </dialog>
    );
}