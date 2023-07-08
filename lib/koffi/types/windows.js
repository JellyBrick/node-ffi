/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

const koffi = require("koffi");

/*
⚠️ The following might be incorrect and / or incomplete.
    Take it with a grain of salt as it is a "written and checked as I need it" kind of thing.
    //Source: https://docs.microsoft.com/en-us/windows/win32/winprog/windows-data-types?redirectedfrom=MSDN
*/

const _WIN64 = process.arch === "x64";

const VOID = koffi.types.void;
const ENUM = koffi.types.uint32;
const DWORD = koffi.types.long;
const WORD = koffi.types.uint16;
const SHORT = koffi.types.int16;
const BYTE = koffi.types.uint8;
const WCHAR = koffi.types.char16;

const ACCESS_MASK = koffi.types.int32; //https://docs.microsoft.com/en-us/windows/win32/secauthz/access-mask-format
const ATOM = koffi.types.uint16;
const PVOID = _WIN64 ? koffi.pointer(koffi.types.uint64) : koffi.pointer(koffi.types.uint32);
//const HANDLE = koffi.opaque();
const LONG_PTR = _WIN64 ? koffi.pointer(koffi.types.int64) : koffi.pointer(koffi.types.long);
const ULONG_PTR = _WIN64 ? koffi.pointer(koffi.types.uint64) : koffi.pointer(koffi.types.ulong);

const BOOL = koffi.types.int;
const BOOLEAN = koffi.types.bool;
const CALLBACK = koffi.pointer(koffi.types.void);
const CCHAR = koffi.types.uint8;
const CHAR = koffi.types.uint8;
const COLORREF = DWORD;
const DWORDLONG = koffi.types.uint64;
const DWORD_PTR = ULONG_PTR;
const DWORD32 = koffi.types.uint32;
const DWORD64 = koffi.types.uint64;
const FLOAT = koffi.types.float;
//const HACCEL = HANDLE;
const HALF_PTR = _WIN64 ? koffi.types.int32 : SHORT;
//const HBITMAP = HANDLE;
//const HBRUSH = HANDLE;
//const HCOLORSPACE = HANDLE;
//const HCONV = HANDLE;
//const HCONVLIST = HANDLE;
//const HCURSOR = HANDLE;
//const HDC = HANDLE;
//const HDDEDATA = HANDLE;
//const HDESK = HANDLE;
//const HDROP = HANDLE;
//const HDWP = HANDLE;
//const HENHMETAFILE = HANDLE;
//const HFILE = HANDLE;
//const HFONT = HANDLE;
//const HGDIOBJ = HANDLE;
//const HGLOBAL = HANDLE;
//const HHOOK = HANDLE;
//const HICON = HANDLE;
//const HINSTANCE = HANDLE;
//const HKEY = HANDLE;
//const HKL = HANDLE;
//const HLOCAL = HANDLE;
//const HMENU = HANDLE;
//const HMETAFILE = HANDLE;
//const HMODULE = HINSTANCE;
//const HMONITOR = HANDLE;
//const HPALETTE = HANDLE;
//const HPEN = HANDLE;
const HRESULT = koffi.types.long;
const NTSTATUS = koffi.types.long;
//const HRGN = HANDLE;
//const HRSRC = HANDLE;
//const HSZ = HANDLE;
//const HWINEVENTHOOK = HANDLE;
//const HWINSTA = HANDLE;
//const HWND = HANDLE;
const INT =  koffi.types.int;
const INT_PTR = _WIN64 ? koffi.types.int64 : koffi.types.int32;
const INT8 = koffi.types.int8;
const INT16 = koffi.types.int16;
const INT32 = koffi.types.int32;
const INT64 = koffi.types.int64;
const LANGID = WORD;
const LCID = DWORD;
const LCTYPE = DWORD;
const LGRPID = DWORD;
const LONG = koffi.types.long;
const LONGLONG = koffi.types.longlong;
const LONG32 = koffi.types.int32;
const LONG64 = koffi.types.int64;
const LPARAM = LONG_PTR;
const LPBOOL = BOOL;
const LPBYTE = koffi.pointer(BYTE);
const LPCOLORREF = DWORD;
const LPCSTR = koffi.types.string;
const LPCTSTR = koffi.types.string16;
const LPCWSTR = koffi.types.string16;
const LPVOID = koffi.pointer(koffi.types.void);
const LPCVOID = LPVOID;
const LPDWORD = koffi.pointer(koffi.types.uint16);
const LPHANDLE = _WIN64 ? koffi.pointer(koffi.types.int64) : koffi.pointer(koffi.types.int32);
const LPINT = koffi.pointer(koffi.types.int);
const LPLONG = koffi.pointer(koffi.types.int32);
//const LPMSG = koffi.pointer(koffi.types.void);
//const LPPOINT = koffi.pointer(koffi.types.void);
const LPSTR = koffi.pointer(koffi.types.char);
const LPWSTR = koffi.pointer(koffi.types.uint16);
const LPTSTR = koffi.pointer(koffi.types.uint16);
const LPWORD = koffi.pointer(koffi.types.uint16);
const LRESULT = LONG_PTR;
const PBOOL = koffi.pointer(koffi.types.int);
const PBOOLEAN = koffi.pointer(koffi.types.bool);
const PBYTE = koffi.pointer(BYTE);
const PCHAR = koffi.pointer(koffi.types.char);
const PCSTR = koffi.pointer(koffi.types.uint8);
const PCTSTR = _WIN64 ? koffi.pointer(koffi.types.int16) : koffi.pointer(koffi.types.int8);
const PCWSTR = koffi.pointer(koffi.types.uint16);
const PDWORD = koffi.pointer(koffi.types.uint32);
const PDWORDLONG = koffi.pointer(koffi.types.uint64);
const PDWORD_PTR = DWORD_PTR;
const PDWORD32 = koffi.pointer(koffi.types.uint32);
const PDWORD64 = koffi.pointer(koffi.types.uint64);
const PFLOAT = koffi.pointer(koffi.types.float);
//const PHALF_PTR = koffi.pointer(koffi.types.void);
const PHANDLE = _WIN64 ? koffi.pointer(koffi.pointer(koffi.types.uint64)) : koffi.pointer(koffi.pointer(koffi.types.uint32));
const PHKEY = _WIN64 ? koffi.pointer(koffi.pointer(koffi.types.uint64)) : koffi.pointer(koffi.pointer(koffi.types.uint32));
const PINT = koffi.pointer(koffi.types.int);
const PINT_PTR = koffi.pointer(koffi.pointer(koffi.types.int));
const PINT8 = koffi.pointer(koffi.types.int8);
const PINT16 = koffi.pointer(koffi.types.int16);
const PINT32 = koffi.pointer(koffi.types.int32);
const PINT64 = koffi.pointer(koffi.types.int64);
const PLCID = koffi.pointer(koffi.types.uint32);
const PLONG = koffi.pointer(koffi.types.long);
const PLONGLONG = koffi.pointer(koffi.types.int64);
//const PLONG_PTR = koffi.pointer(koffi.types.void);
const PLONG32 = koffi.pointer(koffi.types.int32);
const PLONG64 = koffi.pointer(koffi.types.int64);
const POINTER_32 = koffi.pointer(koffi.types.int32);
const POINTER_64 = _WIN64 ? koffi.pointer(koffi.types.int64) : koffi.pointer(koffi.types.int32);
//const POINTER_SIGNED = koffi.pointer(koffi.types.void);
//const POINTER_UNSIGNED = koffi.pointer(koffi.types.void);
const PSHORT = koffi.pointer(koffi.types.int16);
const PSIZE = ULONG_PTR;
//const PSSIZE = koffi.types["void *"];
const PSTR = koffi.pointer(koffi.types.char);
const PTBYTE = koffi.pointer(koffi.types.int16);
const PTCHAR = koffi.pointer(koffi.types.uint16);
const PTSTR = koffi.pointer(koffi.types.uint16);
//const PUCHAR = koffi.pointer(koffi.types.void)
//const PUHALF_PTR = koffi.pointer(koffi.types.void);
const PUINT = koffi.pointer(koffi.types.uint);
const PUINT_PTR = koffi.pointer(koffi.pointer(koffi.types.uint));
const PUINT8 = koffi.pointer(koffi.types.uint8);
const PUINT16 = koffi.pointer(koffi.types.uint16);
const PUINT32 = koffi.pointer(koffi.types.uint32);
const PUINT64 = koffi.pointer(koffi.types.uint64);
const PULONG = koffi.pointer(koffi.types.uint);
const PULONGLONG = koffi.pointer(koffi.types.uint64);
const PULONG_PTR = koffi.pointer(koffi.pointer(koffi.types.uint64));
const PULONG32 = koffi.pointer(koffi.types.uint);
const PULONG64 = koffi.pointer(koffi.types.uint64);
const PUSHORT = koffi.pointer(koffi.types.uint16);
const PWCHAR = koffi.pointer(koffi.types.uint16);
const PWORD = koffi.pointer(koffi.types.uint16);
const PWSTR = koffi.pointer(koffi.types.uint16);
const QWORD = koffi.pointer(koffi.types.uint64);
//const SC_HANDLE = HANDLE;
//const SC_LOCK = LPVOID;
//const SERVICE_STATUS_HANDLE = HANDLE;
const SIZE = ULONG_PTR;
const SSIZE = LONG_PTR;
const TBYTE = koffi.types.int16;
const TCHAR = koffi.types.uint16;
const UCHAR = koffi.types.uchar;
const UHALF_PTR = _WIN64 ? koffi.types.uint32 : koffi.types.uint16;
const UINT = koffi.types.uint;
const UINT_PTR = _WIN64 ? koffi.types.uint64 : koffi.types.uint32;
const UINT8 = koffi.types.uint8;
const UINT16 = koffi.types.uint16;
const UINT32 = koffi.types.uint32;
const UINT64 = koffi.types.uint64;
const ULONG = koffi.types.ulong;
const ULONGLONG = koffi.types.ulonglong;
const ULONG32 = koffi.types.uint32;
const ULONG64 = koffi.types.uint64;
const USHORT = koffi.types.ushort;
const USN = LONGLONG;
const WPARAM = UINT_PTR;

module.exports = {
  VOID,
  ENUM,
  DWORD,
  WORD,
  SHORT,
  BYTE,
  WCHAR,
  ACCESS_MASK,
  ATOM,
  PVOID,
//HANDLE,
  LONG_PTR,
  ULONG_PTR,
  BOOL,
  BOOLEAN,
  CALLBACK,
  CCHAR,
  CHAR,
  COLORREF,
  DWORDLONG,
  DWORD_PTR,
  DWORD32,
  DWORD64,
  FLOAT,
//HACCEL,
  HALF_PTR,
//HBITMAP,
//HBRUSH,
//HCOLORSPACE,
//HCONV,
//HCONVLIST,
//HCURSOR,
//HDC,
//HDDEDATA,
//HDESK,
//HDROP,
//HDWP,
//HENHMETAFILE,
//HFILE,
//HFONT,
//HGDIOBJ,
//HGLOBAL,
//HHOOK,
//HICON,
//HINSTANCE,
//HKEY,
//HKL,
//HLOCAL,
//HMENU,
//HMETAFILE,
//HMODULE,
//HMONITOR,
//HPALETTE,
//HPEN,
  HRESULT,
  NTSTATUS,
//HRGN,
//HRSRC,
//HSZ,
//HWINEVENTHOOK,
//HWINSTA,
//HWND,
  INT,
  INT_PTR,
  INT8,
  INT16,
  INT32,
  INT64,
  LANGID,
  LCID,
  LCTYPE,
  LGRPID,
  LONG,
  LONGLONG,
  LONG32,
  LONG64,
  LPARAM,
  LPBOOL,
  LPBYTE,
  LPCOLORREF,
  LPCSTR,
  LPCTSTR,
  LPCWSTR,
  LPVOID,
  LPCVOID,
  LPDWORD,
  LPHANDLE,
  LPINT,
  LPLONG,
//LPMSG,
//LPPOINT,
  LPSTR,
  LPWSTR,
  LPTSTR,
  LPWORD,
  LRESULT,
  PBOOL,
  PBOOLEAN,
  PBYTE,
  PCHAR,
  PCSTR,
  PCTSTR,
  PCWSTR,
  PDWORD,
  PDWORDLONG,
  PDWORD_PTR,
  PDWORD32,
  PDWORD64,
  PFLOAT,
//PHALF_PTR,
  PHANDLE,
  PHKEY,
  PINT,
  PINT_PTR,
  PINT8,
  PINT16,
  PINT32,
  PINT64,
  PLCID,
  PLONG,
  PLONGLONG,
//PLONG_PTR,
  PLONG32,
  PLONG64,
  POINTER_32,
  POINTER_64,
//POINTER_SIGNED,
//POINTER_UNSIGNED,
  PSHORT,
  PSIZE,
//PSSIZE,
  PSTR,
  PTBYTE,
  PTCHAR,
  PTSTR,
//PUCHAR,
//PUHALF_PTR,
  PUINT,
  PUINT_PTR,
  PUINT8,
  PUINT16,
  PUINT32,
  PUINT64,
  PULONG,
  PULONGLONG,
  PULONG_PTR,
  PULONG32,
  PULONG64,
  PUSHORT,
  PWCHAR,
  PWORD,
  PWSTR,
  QWORD,
//SC_HANDLE,
//SC_LOCK,
//SERVICE_STATUS_HA,NDLE
  SIZE,
  SSIZE,
  TBYTE,
  TCHAR,
  UCHAR,
  UHALF_PTR,
  UINT,
  UINT_PTR,
  UINT8,
  UINT16,
  UINT32,
  UINT64,
  ULONG,
  ULONGLONG,
  ULONG32,
  ULONG64,
  USHORT,
  USN,
  WPARAM,
}