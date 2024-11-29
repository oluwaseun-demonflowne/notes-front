import { create } from "zustand";

type ChooseFolderState = {
  chooseFolder: string;
};

type ChooseFolderAction = {
  setChooseFolder: (state: string) => void;
};

export const useChooseFolderState = create<
  ChooseFolderState & ChooseFolderAction
>((set) => ({
  chooseFolder: "",
  setChooseFolder: (state) => {
    set(() => ({ chooseFolder: state }));
  }
}));
