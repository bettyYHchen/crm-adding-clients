package com.busyqa.crm.utils;

public class Child extends Parent{

    String myStr;

    public Child() {
    }

    public Child(int myVar, String myStr) {
        super(myVar);
        this.myStr = myStr;
    }

    public String getMyStr() {
        return myStr;
    }

    public void setMyStr(String myStr) {
        this.myStr = myStr;
    }

    @Override
    public String toString() {
        return "Child{" +
                "myStr='" + myStr + '\'' +
                ", myVar=" + myVar +
                '}';
    }
}
