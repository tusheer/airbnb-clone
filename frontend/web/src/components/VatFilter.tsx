'use client';

import useQueryParams from '../hooks/usePropertyQuery';

const VatFilter = () => {
    const { queryParams, setQueryParam } = useQueryParams();

    return (
        <section>
            <div className="container mx-auto py-4">
                <div className="grid gap-x-7 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6">
                    <div className="flex items-center justify-between gap-4 rounded-xl border p-4 sm:col-[1/-1] xl:col-[2/-2] 2xl:col-[3/-3]">
                        <div className="flex items-center gap-4">
                            <span className="text-dark-gray text-sm font-semibold">Display total price</span>
                            <span className="bg-light-gray h-4 w-[1px]"></span>
                            <span className="text-light-gray text-sm font-normal">Includes all fees, before taxes</span>
                        </div>

                        <div>
                            <label className="switch">
                                <input
                                    checked={!!queryParams.vat}
                                    onChange={(e) => {
                                        setQueryParam({
                                            vat: e.target.checked ? true : false,
                                        });
                                    }}
                                    type="checkbox"
                                    name="check"
                                    className="togggleinput"
                                />
                                <span className="togggleslider rounded-full"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VatFilter;
